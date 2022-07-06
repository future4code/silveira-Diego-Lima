import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export interface authenticationData {
    id: string,
}
export class Authenticator {
    generateToken = (
        payload: authenticationData
    ): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "3h"
            }
        )
    }
    getTokenData = (
        token: string
    ): authenticationData => {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData
    }
}