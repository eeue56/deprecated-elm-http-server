var sanitize = function sanitize(record) {
    var spaces = Array.prototype.slice.call(arguments, 1);
    return spaces.reduce(function (r, space) {
        return (function () {
            r[space] ? void 0 : r[space] = {};
            return r[space];
        })();
    }, record);
};
var createServer = function createServer(http, Tuple2, Task) {
    return function (address) {
        return function () {
            var sendø1 = (address || 0)['_0'];
            var serverø1 = http.createServer(function (request, response) {
                return Task.perform(sendø1(Tuple2(request, response)));
            });
            return Task.asyncFunction(function (callback) {
                return callback(Task.succeed(serverø1));
            });
        }.call(this);
    };
};
var listen = function listen(Task) {
    return function (port, echo, server) {
        return Task.asyncFunction(function (callback) {
            return server.listen(port, function () {
                return (function () {
                    console.log(echo);
                    return callback(Task.succeed(server));
                })();
            });
        });
    };
};
var writeHead = function writeHead(Task) {
    return function (code, header, res) {
        return function () {
            var oø1 = {};
            return Task.asyncFunction(function (callback) {
                return (function () {
                    oø1[header._0] = header._1;
                    res.writeHead(code, oø1);
                    return callback(Task.succeed(res));
                })();
            });
        }.call(this);
    };
};
var write = function write(Task) {
    return function (message, res) {
        return Task.asyncFunction(function (callback) {
            return (function () {
                res.write(message);
                return callback(Task.succeed(res));
            })();
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
var on = exports.on = function on(Signal) {
    return function (eventName, x) {
        return x.on(eventName, function (request, response) {
            return (request || 0)['ctor'] == 'Tuple0' ? Signal.input(eventName, Tuple0) : Signal.input(eventName, Tuple(request, response));
        });
    };
};
var make = function make(localRuntime) {
    return function () {
        var httpø1 = require('http');
        var Taskø1 = Elm.Native.Task.make(localRuntime);
        var Utilsø1 = Elm.Native.Utils.make(localRuntime);
        var Signalø1 = Elm.Native.Signal.make(localRuntime);
        var Tuple0ø1 = (Utilsø1 || 0)['Tuple0'];
        var Tuple2ø1 = (Utilsø1 || 0)['Tuple2'];
        var noopø1 = function () {
            return void 0;
        };
        return (function () {
            sanitize(localRuntime, 'Native', 'Http');
            return function () {
                var vø1 = localRuntime.Native.Http.values;
                return vø1 ? vø1 : localRuntime.Native.Http.values = {
                    'createServer': createServer(httpø1, Tuple2ø1, Taskø1),
                    'listen': F3(listen(Taskø1)),
                    'writeHead': F3(writeHead(Taskø1)),
                    'write': F2(write(Taskø1)),
                    'on': F2(on(Signalø1, Tuple0ø1)),
                    'end': end(Taskø1, Tuple0ø1),
                    'url': function (res) {
                        return (res || 0)['url'];
                    },
                    'method': function (res) {
                        return (res || 0)['method'];
                    },
                    'statusCode': function (res) {
                        return (res || 0)['statusCode'];
                    },
                    'emptyReq': {},
                    'emptyRes': {
                        'end': noopø1,
                        'write': noopø1,
                        'writeHead': noopø1
                    }
                };
            }.call(this);
        })();
    }.call(this);
};
sanitize(Elm, 'Native', 'Http');
Elm.Native.Http.make = make;
typeof(window) == 'undefined' ? window = global : void 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbInNhbml0aXplIiwicmVjb3JkIiwic3BhY2VzIiwicmVkdWNlIiwiciIsInNwYWNlIiwiY3JlYXRlU2VydmVyIiwiaHR0cCIsIlR1cGxlMiIsIlRhc2siLCJhZGRyZXNzIiwic2VuZMO4MSIsInNlcnZlcsO4MSIsInJlcXVlc3QiLCJyZXNwb25zZSIsInBlcmZvcm0iLCJhc3luY0Z1bmN0aW9uIiwiY2FsbGJhY2siLCJzdWNjZWVkIiwibGlzdGVuIiwicG9ydCIsImVjaG8iLCJzZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwid3JpdGVIZWFkIiwiY29kZSIsImhlYWRlciIsInJlcyIsIm/DuDEiLCJfMCIsIl8xIiwid3JpdGUiLCJtZXNzYWdlIiwiZW5kIiwiVHVwbGUwIiwib24iLCJleHBvcnRzIiwiU2lnbmFsIiwiZXZlbnROYW1lIiwieCIsImlucHV0IiwiVHVwbGUiLCJtYWtlIiwibG9jYWxSdW50aW1lIiwiaHR0cMO4MSIsInJlcXVpcmUiLCJUYXNrw7gxIiwiRWxtIiwiTmF0aXZlLlRhc2subWFrZSIsIlV0aWxzw7gxIiwiTmF0aXZlLlV0aWxzLm1ha2UiLCJTaWduYWzDuDEiLCJOYXRpdmUuU2lnbmFsLm1ha2UiLCJUdXBsZTDDuDEiLCJUdXBsZTLDuDEiLCJub29ww7gxIiwidsO4MSIsIk5hdGl2ZS5IdHRwLnZhbHVlcyIsIkYzIiwiRjIiLCJOYXRpdmUuSHR0cC5tYWtlIiwidHlwZW9mIiwid2luZG93IiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPQSxRQUFBLEdBQVAsU0FBT0EsUUFBUCxDQUNHQyxNQURILEU7UUFDWUMsTUFBQSxHO0lBQ1YsT0FBQ0EsTUFBQSxDQUFPQyxNQUFSLENBQWUsVUFBS0MsQ0FBTCxFQUFPQyxLQUFQLEVBQWM7QUFBQSxlLGFBQzNCO0FBQUEsWUFBVUQsQ0FBTixDQUFRQyxLQUFSLENBQUosRyxNQUFBLEdBQW1DRCxDQUFOLENBQVFDLEtBQVIsQ0FBTixHQUFx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QSxvQixZQVc5QixFQVg4QjtBQUFBLG9CLFlBWTlCO0FBQUEsd0IsT0FDRTRCLE1BREY7QUFBQSx3QixTQUVFQSxNQUZGO0FBQUEsd0IsYUFHRUEsTUFIRjtBQUFBLHFCQVo4QjtBQUFBLGlCQUE5QyxDQURJO0FBQUEsYSxLQUFOLEMsSUFBQSxFQURFO0FBQUEsUyxDQUFBLEVBQUosQ0FSQztBQUFBLEssS0FEYyxDLElBQUE7QUFBQSxDQURqQixDQXZEQTtBQW9GQ3hELFFBQUQsQ0FBVWdELEdBQVYsRSxRQUFBLEUsTUFBQSxFQXBGQTtBQXFGTUEsR0FBQSxDQUFJYSxnQkFBVixHQUEyQmxCLElBQTNCLENBckZBO0FBdUZTbUIsTUFBRCxDQUFRQyxNQUFSLENBQUosSSxXQUFKLEdBQTBDQSxNQUFOLEdBQWFDLE1BQWpELEcsTUFBQSIsInNvdXJjZXNDb250ZW50IjpbIihkZWZuLSBzYW5pdGl6ZVxuICBbcmVjb3JkICYgc3BhY2VzXVxuICAoc3BhY2VzLnJlZHVjZSAoZm4gW3Igc3BhY2VdIChkb1xuICAgIChpZiAoYWdldCByIHNwYWNlKSBuaWwgKHNldCEgKGFnZXQgciBzcGFjZSkge30pKVxuICAgIChhZ2V0IHIgc3BhY2UpKSlcbiAgcmVjb3JkKSlcblxuKGRlZm4tIGNyZWF0ZVNlcnZlclxuICBbaHR0cCBUdXBsZTIgVGFza11cbiAgKGZuIFthZGRyZXNzXSAobGV0XG4gICAgW3NlbmQgKDpfMCBhZGRyZXNzKVxuICAgICBzZXJ2ZXIgKC5jcmVhdGVTZXJ2ZXIgaHR0cCAoZm4gW3JlcXVlc3QgcmVzcG9uc2VdXG4gICAgICAoLnBlcmZvcm0gVGFzayAoc2VuZCAoVHVwbGUyIHJlcXVlc3QgcmVzcG9uc2UpKSkpKV1cblxuICAgICguYXN5bmNGdW5jdGlvbiBUYXNrXG4gICAgICAoZm4gW2NhbGxiYWNrXSAoY2FsbGJhY2sgKC5zdWNjZWVkIFRhc2sgc2VydmVyKSkpKSkpKVxuXG4oZGVmbi0gbGlzdGVuXG4gIFtUYXNrXVxuICAoZm4gW3BvcnQgZWNobyBzZXJ2ZXJdXG4gICAgKC5hc3luY0Z1bmN0aW9uIFRhc2sgKGZuIFtjYWxsYmFja11cbiAgICAgICgubGlzdGVuIHNlcnZlciBwb3J0IChmbiBbXVxuICAgICAgICAoZG8gKC5sb2cgY29uc29sZSBlY2hvKSAoY2FsbGJhY2sgKC5zdWNjZWVkIFRhc2sgc2VydmVyKSkpKSkpKSkpXG5cbihkZWZuLSB3cml0ZUhlYWRcbiAgW1Rhc2tdXG4gIChmbiBbY29kZSBoZWFkZXIgcmVzXVxuICAgIChsZXQgW28ge31dXG4gICAgICAoLmFzeW5jRnVuY3Rpb24gVGFzayAoZm4gW2NhbGxiYWNrXVxuICAgICAgICAoZG8gKHNldCEgKGFnZXQgbyBoZWFkZXIuXzApIGhlYWRlci5fMSlcbiAgICAgICAgICAgICgud3JpdGVIZWFkIHJlcyBjb2RlIG8pXG4gICAgICAgICAgICAoY2FsbGJhY2sgKC5zdWNjZWVkIFRhc2sgcmVzKSkpKSkpKSlcblxuKGRlZm4tIHdyaXRlXG4gIFtUYXNrXVxuICAoZm4gW21lc3NhZ2UgcmVzXVxuICAgICguYXN5bmNGdW5jdGlvbiBUYXNrIChmbiBbY2FsbGJhY2tdXG4gICAgICAoZG8gKC53cml0ZSByZXMgbWVzc2FnZSlcbiAgICAgICAgICAoY2FsbGJhY2sgKC5zdWNjZWVkIFRhc2sgcmVzKSkpKSkpKVxuXG4oZGVmbi0gZW5kXG4gIFtUYXNrIFR1cGxlMF1cbiAgKGZuIFtyZXNdXG4gICAgKC5hc3luY0Z1bmN0aW9uIFRhc2sgKGZuIFtjYWxsYmFja11cbiAgICAgIChkbyAoLmVuZCByZXMpXG4gICAgICAgICAgKGNhbGxiYWNrICguc3VjY2VlZCBUYXNrIFR1cGxlMCkpKSkpKSlcblxuKGRlZm4gb25cbiAgW1NpZ25hbF1cbiAgKGZuIFtldmVudE5hbWUgeF1cbiAgICAoLm9uIHggZXZlbnROYW1lIChmbiBbcmVxdWVzdCwgcmVzcG9uc2VdXG4gICAgICAoaWYgKD09ICg6Y3RvciByZXF1ZXN0KSBcIlR1cGxlMFwiKVxuICAgICAgICAoLmlucHV0IFNpZ25hbCBldmVudE5hbWUgVHVwbGUwKVxuICAgICAgICAoLmlucHV0IFNpZ25hbCBldmVudE5hbWUgKFR1cGxlIHJlcXVlc3QgcmVzcG9uc2UpKSkpKSkpXG5cbihkZWZuLSBtYWtlXG4gIFtsb2NhbFJ1bnRpbWVdIChsZXRcbiAgW2h0dHAgKHJlcXVpcmUgXCJodHRwXCIpXG4gICBUYXNrICAgKEVsbS5OYXRpdmUuVGFzay5tYWtlICAgbG9jYWxSdW50aW1lKVxuICAgVXRpbHMgIChFbG0uTmF0aXZlLlV0aWxzLm1ha2UgIGxvY2FsUnVudGltZSlcbiAgIFNpZ25hbCAoRWxtLk5hdGl2ZS5TaWduYWwubWFrZSBsb2NhbFJ1bnRpbWUpXG4gICBUdXBsZTAgKDpUdXBsZTAgVXRpbHMpXG4gICBUdXBsZTIgKDpUdXBsZTIgVXRpbHMpXG4gICBub29wICAgKGZuIFtdIG5pbCldXG5cbiAgKGRvIChzYW5pdGl6ZSBsb2NhbFJ1bnRpbWUgOk5hdGl2ZSA6SHR0cClcbiAgICAobGV0IFt2IGxvY2FsUnVudGltZS5OYXRpdmUuSHR0cC52YWx1ZXNdXG4gICAgICAoaWYgdiB2IChzZXQhIGxvY2FsUnVudGltZS5OYXRpdmUuSHR0cC52YWx1ZXMge1xuXG4gICAgICAgIDpjcmVhdGVTZXJ2ZXIgKGNyZWF0ZVNlcnZlciBodHRwIFR1cGxlMiBUYXNrKVxuICAgICAgICA6bGlzdGVuICAgICAgIChGMyAobGlzdGVuICAgIFRhc2spKVxuICAgICAgICA6d3JpdGVIZWFkICAgIChGMyAod3JpdGVIZWFkIFRhc2spKVxuICAgICAgICA6d3JpdGUgICAgICAgIChGMiAod3JpdGUgICAgIFRhc2spKVxuICAgICAgICA6b24gICAgICAgICAgIChGMiAob24gICAgICAgIFNpZ25hbCBUdXBsZTApKVxuICAgICAgICA6ZW5kICAgICAgICAgIChlbmQgVGFzayBUdXBsZTApXG4gICAgICAgIDp1cmwgICAgICAgICAgKGZuIFtyZXNdICg6dXJsICAgICAgICByZXMpKVxuICAgICAgICA6bWV0aG9kICAgICAgIChmbiBbcmVzXSAoOm1ldGhvZCAgICAgcmVzKSlcbiAgICAgICAgOnN0YXR1c0NvZGUgICAoZm4gW3Jlc10gKDpzdGF0dXNDb2RlIHJlcykpXG4gICAgICAgIDplbXB0eVJlcSAgICAge31cbiAgICAgICAgOmVtcHR5UmVzICAgICB7XG4gICAgICAgICAgOmVuZCAgICAgICAgICBub29wXG4gICAgICAgICAgOndyaXRlICAgICAgICBub29wXG4gICAgICAgICAgOndyaXRlSGVhZCAgICBub29wfX0pKSkpKSlcblxuKHNhbml0aXplIEVsbSA6TmF0aXZlIDpIdHRwKVxuKHNldCEgRWxtLk5hdGl2ZS5IdHRwLm1ha2UgbWFrZSlcblxuKGlmICg9PSAodHlwZW9mIHdpbmRvdykgOnVuZGVmaW5lZCkgKHNldCEgd2luZG93IGdsb2JhbCkpXG4iXX0=
