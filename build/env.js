"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESPONSE_DELAY = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getNumber(env, def) {
    return env !== undefined ? Number(env) : def;
}
exports.PORT = getNumber(process.env.PORT, 5001);
exports.RESPONSE_DELAY = getNumber(process.env.RESPONSE_DELAY, 0);
