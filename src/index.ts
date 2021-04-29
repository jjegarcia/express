import express, { urlencoded, json, Router } from 'express'
import cors from 'cors'
import { PORT, RESPONSE_DELAY } from './env'
import { responseDelay, logger } from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import firebase from 'firebase'
import testRead from './dbHandlers/dbReadHandlers'
import testWrite from './dbHandlers/dbWriteHandlers'

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(logger())
app.use(responseDelay(RESPONSE_DELAY))

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

firebase.initializeApp(firebaseConfig)
export const db = firebase.database()
// ENDPOINTS

app.post('/user', json(), addUser) //(endpointUrl,handlers)
app.get('/user', getUser)

app.listen({ port: PORT }, () => console.log(`Server running on port ${PORT}`))

testRead()
testWrite()