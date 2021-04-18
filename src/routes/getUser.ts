
import { Request, Response } from 'express'
import { db } from './UserService'

export default function getUser (request: Request, response: Response) {
    console.log(db)
    
    return response.json({
        db: db
    })
}
