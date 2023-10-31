import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
export async function messageService(data) {
  let url = process.env.SMSENDPOINT;
  let api_key = process.env.APIKEY;

  let options = {
    headers: {
      "D-API-Key": `${api_key}-api-key`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  let response = await axios.post(url, data, options);

  console.log(response)
}

// messageService({content: "Test", phoneNumber: "254799541853", country:"KENYA"})