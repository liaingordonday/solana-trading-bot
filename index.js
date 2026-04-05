require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot is live 🚀');
});

app.get('/trade', (req, res) => {
  res.send('Simulated trade working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
