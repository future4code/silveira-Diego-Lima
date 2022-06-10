import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";


 export const createUser = async (
    
    name: string,
    nickName: string,
    email: string,
     ): Promise<void> => {
    await connection
      .insert({
        id: Date.now().toString(),
        name: name,
        nick_name: nickName,
        email: email        
      })
      .into("User");
  };

