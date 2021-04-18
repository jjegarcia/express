"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1 = require("./UserService");
function getUser(request, response) {
    console.log(UserService_1.db);
    return response.json({
        db: UserService_1.db
    });
}
exports.default = getUser;
