import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export interface authenticationData {
    id: string
}
export default class Authenticator {
    public generate(input: authenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        });
        return token
    }

    public getTokenData = (token: string): authenticationData | null => {
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as any

            return tokenData

        } catch (error) {
            console.log(error)
            return null
        }

    }
}   
