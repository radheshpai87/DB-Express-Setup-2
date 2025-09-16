const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { resolve } = require('path');

const app = express();
const port = 3000 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
