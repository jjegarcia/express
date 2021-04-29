"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1 = require("./UserService");
var uuid_1 = require("uuid");
function addUser(request, response) {
    var data = request.body;
    if (!(data.name && data.password && data.profession)) {
        return response.sendStatus(400);
    }
    UserService_1.db.push(__assign(__assign({}, request.body), { uid: uuid_1.v4() }));
    response.sendStatus(200);
    response.destroy;
}
exports.default = addUser;
