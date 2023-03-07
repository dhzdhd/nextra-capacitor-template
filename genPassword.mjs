import crypto from "crypto-js";
import Base64 from "crypto-js/enc-base64";
import { v4 as uuidv4 } from "uuid";

const password = process.argv[2];

if (typeof password === "undefined") {
  console.log("Password not entered!");
  process.exit(0);
}

const salt = uuidv4().replaceAll("-", "");
const hash = Base64.stringify(crypto.SHA512(`${password}${salt}`));

console.log(`\n\nPassword: ${password}\nSalt: ${salt}\nHash: ${hash}`);
