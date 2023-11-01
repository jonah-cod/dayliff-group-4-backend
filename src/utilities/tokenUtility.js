import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();

let secret = process.env.SECRET;
export async function generateToken(payload){
      return await jwt.sign({...payload}, secret, {expiresIn: "24h"});
}

export async function verifyToken(token){
      return jwt.verify(token, secret);
}