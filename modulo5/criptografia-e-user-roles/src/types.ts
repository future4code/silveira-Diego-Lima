export enum USER_ROLES {
   GUEST = "GUEST",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   role: USER_ROLES
}


export type authenticationData = {
   id: string
   role: string
}

