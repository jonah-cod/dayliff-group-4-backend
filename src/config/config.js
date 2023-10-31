import * as dotenv from 'dotenv';

dotenv.config();

const username = process.env.MONGOUSER;
const password = process.env.PASSWORD;
console.log(username, password)

export const config = {
      dbUrl: `mongodb+srv://${username}:${password}@cluster0.t3sxzqv.mongodb.net/`
}