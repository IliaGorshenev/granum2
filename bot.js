const TelegramBot = require('node-telegram-bot-api');

// Use the provided token
const telegramBotToken = '7694051593:AAGBls3mX5vQwvn4s95-gdOZHD9_96aNC7U';

// Create a bot instance
const bot = new TelegramBot(telegramBotToken, { polling: true });

// Log when the bot starts
console.log('Bot is starting...');

// Get bot information
bot.getMe().then((botInfo) => {
  console.log(`Bot is running. Bot username: @${botInfo.username}`);
}).catch((error) => {
  console.error('Error getting bot information:', error);
});

// Respond to messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  console.log(`Received message from chat ${chatId}: ${userMessage}`);

  // Respond to the user
  bot.sendMessage(chatId, `You said: "${userMessage}"`).then(() => {
    console.log(`Sent response to chat ${chatId}`);
  }).catch((error) => {
    console.error(`Error sending message to chat ${chatId}:`, error);
  });
});

// Handle polling errors
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});
