const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const urlRouter = require('./routes/url.routes');

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/db';

mongoose.connect(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(express.static('client'));
app.use('/url', urlRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
