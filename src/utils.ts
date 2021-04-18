
import { RequestHandler } from "express"

export function logger(): RequestHandler {
    return (request, response, next) => {
        console.log(`${request.method} ${request.url}`)
        next()
    }
}

export function responseDelay(delay: number): RequestHandler {
    return (request, response, next) => {
        if (delay > 0) {
            setTimeout(next, delay)
        } else {
            next()
        }
    }
}