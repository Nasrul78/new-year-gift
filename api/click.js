/* eslint-disable no-undef */
import twilio from "twilio"

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const handler = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end()

  const time = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })

  const message = await client.messages.create({
    contentSid: process.env.TWILIO_CONTENT_SID,
    contentVariables: JSON.stringify({ 1: "Click", 2: time }),
    from: process.env.TWILIO_FROM,
    to: process.env.TWILIO_TO,
  })

  console.log(message.sid)

  res.status(200).end()
}

export default handler
