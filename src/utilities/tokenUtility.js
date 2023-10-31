import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();

let secret = process.env.SECRET;
export async function generateToken(payload){
      return jwt.sign(payload, secret);
}

export async function verifyToken(token){
      return jwt.verify(token, secret);
}