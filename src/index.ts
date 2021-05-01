import express, { urlencoded, json, Router } from 'express'
import cors from 'cors'
import { PORT, RESPONSE_DELAY } from './env'
import { responseDelay, logger } from './utils'
import addUser from './routes/addUser'
import getUser from './routes/getUser'
import testRead from './dbHandlers/dbReadHandlers'
import testWrite from './dbHandlers/dbWriteHandlers'

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(logger())
app.use(responseDelay(RESPONSE_DELAY))

// ENDPOINTS

app.post('/user', json(), addUser) //(endpointUrl,handlers)
app.get('/user', getUser)

app.listen({ port: PORT }, () => console.log(`Server running on port ${PORT}`))

testRead()
testWrite()

// testSend()