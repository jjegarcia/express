"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var env_1 = require("./env");
var utils_1 = require("./utils");
var addUser_1 = __importDefault(require("./routes/addUser"));
var getUser_1 = __importDefault(require("./routes/getUser"));
var firebase_1 = __importDefault(require("firebase"));
var app = express_1.default();
// MIDDLEWARE
app.use(cors_1.default());
app.use(utils_1.logger());
app.use(utils_1.responseDelay(env_1.RESPONSE_DELAY));
var firebaseConfig = {
    apiKey: "AIzaSyAxQa9ZpYSQO3rvRPEKv60ZfBL78lIvgNM",
    authDomain: "letterbox-860b7.firebaseapp.com",
    databaseURL: "https://letterbox-860b7-default-rtdb.firebaseio.com",
    projectId: "letterbox-860b7",
    storageBucket: "letterbox-860b7.appspot.com",
    messagingSenderId: "693213306946",
    appId: "1:693213306946:web:71fbc5602141f6aa304ddb",
    measurementId: "G-DSCPJBY3VS"
};
firebase_1.default.initializeApp(firebaseConfig);
var db = firebase_1.default.database();
var obj = { name: 'testName', id: 10 };
db.ref('testDir').set(obj, function (error) { return error ? console.log(error) : console.log('success'); });
// db.ref('Letterbox_database').once('value')
// .then(function(snapshot) {
//     console.log( snapshot.val() )
// })
db.ref("Letterbox_database").child("event_list").get().then(function (snapshot) {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    }
    else {
        console.log("No data available");
    }
}).catch(function (error) {
    console.error(error);
});
/**
 * app.get (GET Request)
 * app.delete (DELETE Request)
 * app.post (POST Request)
 */
// ENDPOINTS
app.post('/user', express_1.json(), addUser_1.default); //(endpointUrl,handlers)
app.get('/user', getUser_1.default);
app.listen({ port: env_1.PORT }, function () { return console.log("Server running on port " + env_1.PORT); });
