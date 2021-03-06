var COMPILED_DIR = '.comp';

var wrap_with_type = function(item){
    return {
        ctor: item
    };
};

var make_compile_dir = function(fs, dir){
    if (typeof dir === "undefined"){
        dir = COMPILED_DIR;
    }

    if (!fs.existsSync(dir)){
       fs.mkdirSync(dir);
    }
};

var createServer = function createServer(fs, http, Tuple2, Task) {
    return function (address) {
        make_compile_dir(fs, __dirname + "/" + COMPILED_DIR);

        var send = address._0;
        var server = http.createServer(function (request, response) {
            request.method = wrap_with_type(request.method);
            return Task.perform(send(Tuple2(request, response)));
        });
        return Task.asyncFunction(function (callback) {
            return callback(Task.succeed(server));
        });
    };
};

var listen = function listen(Task) {
    return function (port, echo, server) {
        return Task.asyncFunction(function (callback) {
            return server.listen(port, function () {
                console.log(echo);
                return callback(Task.succeed(server));
            });
        });
    };
};
var writeHead = function writeHead(Task) {
    return function (code, header, res) {
        var o = {};
        return Task.asyncFunction(function (callback) {
            o[header._0] = header._1;
            res.writeHead(code, o);
            return callback(Task.succeed(res));
        });
    };
};

var write = function write(Task) {
    return function (message, res) {
        return Task.asyncFunction(function (callback) {
            res.write(message);
            return callback(Task.succeed(res));
        });
    };
};

var writeFile = function writeFile(fs, mime, Task){
    return function (fileName, res) {
        return Task.asyncFunction(function (callback) {

            var file = __dirname + fileName;
            var type = mime.lookup(file);
            console.log("file", file);
            res.writeHead('Content-Type', type);

            fs.readFile(file, function (e, data) {
                res.end(data);
                return callback(Task.succeed(res));
            });

        });
    };
};

var writeElm = function writeElm(fs, mime, crypto, compiler, Task){
    return function (fileName, res) {
        var compiled_file = COMPILED_DIR + fileName + '.html';

        if (fs.existsSync(compiled_file)) {
            return writeFile(fs, mime, Task)("/" + compiled_file, res);
        }

        return Task.asyncFunction(function (callback) {
            var file = __dirname + fileName;
            var outfile = __dirname + "/" + compiled_file;

            // switch to the directory that the elm-app is served out of
            var dirIndex = file.lastIndexOf('/');
            var dir = file.substr(0, dirIndex);

            process.chdir(dir);

            compiler.compile([file + '.elm'], {
                output: outfile,
                yes: true
            }).on('close', function(exitCode) {
                var type = mime.lookup(file + '.html');

                res.writeHead('Content-Type', type);

                fs.readFile(outfile, function (e, data) {
                    res.end(data);
                    return callback(Task.succeed(res));
                });
            });
        });
    };
};

var end = function end(Task, Tuple0) {
    return function (res) {
        return Task.asyncFunction(function (callback) {
            return (function () {
                res.end();
                return callback(Task.succeed(Tuple0));
            })();
        });
    };
};
var on = function on(Signal) {
    return function (eventName, x) {
        return x.on(eventName, function (request, response) {
            if (typeof(request) == 'undefined') {
                return Signal.input(eventName, Tuple0);
            }
            return Signal.input(eventName, Tuple(request, response));
        });
    };
};
var make = function make(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Http = localRuntime.Native.Http || {};


    if (localRuntime.Native.Http.values) {
        return localRuntime.Native.Http.values;
    }

    var http = require('http');
    var fs = require('fs');
    var mime = require('mime');
    var compiler = require('node-elm-compiler');
    var crypto = require('crypto');

    var Task = Elm.Native.Task.make(localRuntime);
    var Utils = Elm.Native.Utils.make(localRuntime);
    var Signal = Elm.Native.Signal.make(localRuntime);
    var Tuple0 = Utils['Tuple0'];
    var Tuple2 = Utils['Tuple2'];


    return {
        'createServer': createServer(fs, http, Tuple2, Task),
        'listen': F3(listen(Task)),
        'writeHead': F3(writeHead(Task)),
        'writeFile': F2(writeFile(fs, mime, Task)),
        'writeElm': F2(writeElm(fs, mime, crypto, compiler, Task)),
        'write': F2(write(Task)),
        'on': F2(on(Signal, Tuple0)),
        'end': end(Task, Tuple0)
    };
};
Elm.Native.Http = {};
Elm.Native.Http.make = make;

if (typeof window === "undefined") {
    window = global;
}
