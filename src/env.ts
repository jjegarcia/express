
import dotenv from 'dotenv'

dotenv.config()

function getNumber(env: string | undefined, def: number): number {
    return env !== undefined ? Number(env) : def
}

export const PORT = getNumber(process.env.PORT, 5001)
export const RESPONSE_DELAY = getNumber(process.env.RESPONSE_DELAY, 0)
