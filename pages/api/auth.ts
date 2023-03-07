import type { NextApiRequest, NextApiResponse } from "next";
import { SHA512 } from "crypto-js";
import Base64 from "crypto-js/enc-base64";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const passwordHash = process.env.PASSWORD!;
    const salt = process.env.SALT!;

    const hash = SHA512(`${req.body}${salt}`);
    const encodedHash = Base64.stringify(hash);

    if (passwordHash === encodedHash) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    return res.status(500).json({ message: "Server error" });
  }
}
