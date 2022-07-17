// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string,
  last_name: string,
  live?: boolean
}
export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe', last_name: 'Robinson', live: true })
}
