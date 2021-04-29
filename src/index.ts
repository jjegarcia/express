import express, { urlencoded, json, Router } from 'express'
import cors from 'cors'
import { PORT, RESPONSE_DELAY } from './env'
import { responseDelay, logger } from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import firebase from 'firebase'

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
const db = firebase.database()
const obj = { name: 'testName', id: 10 }

db.ref('testDir').set(obj, (error) => error ? console.log(error) : console.log('success'))

// db.ref('Letterbox_database').once('value')
// .then(function(snapshot) {
//     console.log( snapshot.val() )
// })
db.ref("Letterbox_database").child("event_list").get().then((snapshot) => {
    if (snapshot.exists()){
        console.log(snapshot.val())
    } else{
        console.log("No data available")
    }
}).catch((error) =>{
    console.error(error)
})


/**
 * app.get (GET Request)
 * app.delete (DELETE Request)
 * app.post (POST Request)
 */
// ENDPOINTS

app.post('/user', json(), addUser) //(endpointUrl,handlers)
app.get('/user', getUser)

app.listen({ port: PORT }, () => console.log(`Server running on port ${PORT}`))
