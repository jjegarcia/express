
import { Request, Response } from 'express'
import { User, db } from './UserService'
import { v4 as uuidv4 } from 'uuid';

interface AddUserRequestBody extends Omit<User, 'uid'> {}

export default function addUser (request: Request, response: Response) {
    const data = request.body as AddUserRequestBody

    if (!(data.name && data.password && data.profession)) {
        return response.sendStatus(400)
    }


    db.push({
        ...request.body,
        uid: uuidv4()
    })

    response.sendStatus(200)
    response.destroy
}
