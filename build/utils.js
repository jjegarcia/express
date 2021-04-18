"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseDelay = exports.logger = void 0;
function logger() {
    return function (request, response, next) {
        console.log(request.method + " " + request.url);
        next();
    };
}
exports.logger = logger;
function responseDelay(delay) {
    return function (request, response, next) {
        if (delay > 0) {
            setTimeout(next, delay);
        }
        else {
            next();
        }
    };
}
exports.responseDelay = responseDelay;
