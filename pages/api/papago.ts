import type { NextApiRequest, NextApiResponse } from 'next'
import papagoTranslate from '../../library/papago';


type Data = {
    translated?: string[]
  }




  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const body = req.body
    const result= await papagoTranslate(body.text, body.lan)
    res.status(200).json({translated:result})
}
