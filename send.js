const fetch = require("node-fetch");

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const message = "Your daily message 🚀";

async function sendMessage() {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });

  const data = await response.json();
  console.log("Telegram response:", data);
}

sendMessage().catch(console.error);
