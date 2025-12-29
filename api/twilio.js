/* eslint-disable no-undef */
import twilio from "twilio"

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const handler = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end()

  const time = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })

  await client.messages.create({
    from: "whatsapp:+14155238886",
    to: "whatsapp:+6285711151209",
    body: `Jenii clicked *${req.body.action}* at *${time}*`,
  })

  res.status(200).end()
}

export default handler
