// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// const transport = nodemailer.createTransport({
//     host: 'smtp.example.com',
//     port: 587,
//     auth: {
//       user: 'your-email@example.com',
//       pass: 'your-password',
//     },
//   });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
//     const { name, email, message } = req.body;

//     // Set up email options
//     const mailOptions = {
//       from: email,
//       to: 'you@example.com',
//       subject: `Message from ${name}`,
//       text: message,
//     };
  
//     // Send the email
//     transport.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         res.send('Error sending email');
//       } else {
//         console.log(info);
//         res.send('Email sent');
//       }
//     });
//   });
}
