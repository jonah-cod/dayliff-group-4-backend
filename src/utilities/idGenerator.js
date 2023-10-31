import { v4 } from "uuid";

export function idGenerator() {
	let hexString = v4();
	//get rid of dashes
	hexString = hexString.replace(/-/g, "");
      //shorten to base64
	let shorterId = Buffer.from(hexString, "hex").toString("base64");
	return shorterId.replace(/[\+\*\/\%\&\|\^\&\*\(\)\=\{\}\[\]:;"'<>,\.?\\]/g, "");
}
