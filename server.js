import express from "express";
import { createMessage } from "./send_sms.js";

const app = express();

app.post("/api/test-sms", async (_req, res) => {
  try {
    await createMessage();
    res.sendStatus(204);
  } catch (error) {
    console.error("Twilio test failed", error.code, error.message);
    res.status(500).json({ error: "SMS test failed. Check the server logs." });
  }
});

app.listen(3001, () => {
  console.log("API listening on port 3001");
});