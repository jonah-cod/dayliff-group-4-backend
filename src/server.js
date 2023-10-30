import express from 'express';
import * as dotenv from 'dotenv';


dotenv.config()
const app = express();

app.use(express.json());



const port = process.env.PORT || 3500;



app.listen(port, ()=>{
      console.log(`Server listening on port: ${port}`)
})
