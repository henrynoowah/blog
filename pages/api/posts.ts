import fs from 'fs'
import { NextApiRequest, NextApiResponse } from "next"
import path from 'path'

export const handler = async(req: NextApiRequest,res: NextApiResponse) => {
  const posts = fs.readdirSync(path.join('posts'))

  console.log(posts)

  res.status(200).json(posts)
}