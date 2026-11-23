import twilio from "twilio"
import { loadEnvFile } from "node:process";

loadEnvFile();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = twilio(apiKey, apiSecret, { accountSid: accountSid });

export async function createMessage() {
  const message = await client.messages.create({
    body: "sms_order_confirmation",
    from: "+17372583742",
    to: "+19082830948",
  });

  console.log(message.sid, message.status);
}

