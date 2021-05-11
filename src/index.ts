import express, { urlencoded, json, Router } from 'express'
import cors from 'cors'
import { PORT, RESPONSE_DELAY } from './env'
import { responseDelay, logger } from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import testRead from './dbHandlers/dbReadHandlers'
import testWrite from './dbHandlers/dbWriteHandlers'
import testSend from './fcmHandlers/send'
import testSendNotification from './fcmHandlers/sendNotification'
// import { runMain, runPy } from './pythonConfig'
//import {spiTest} from './spiExample.tsoo'
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(logger())
app.use(responseDelay(RESPONSE_DELAY))

// ENDPOINTS

app.post('/user', json(), addUser) //(endpointUrl,handlers)
app.get('/user', getUser)

app.listen({ port: PORT }, () => console.log(`Server running on port ${PORT}`))

// testRead()
// testWrite()

//  testSend()
//testSendNotification()

// runMain()

var myPythonScriptPath = '/Users/jgarc609/github/express/src/script.py';

// Use python shell
// var PythonShell = require('python-shell');
const {PythonShell} = require("python-shell");

var pyshell = new PythonShell(myPythonScriptPath);

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err) {
        throw err;
    };

    console.log('finished');
});