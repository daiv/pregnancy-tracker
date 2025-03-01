const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./model/index');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  mongoose.startConnection();
  console.log(`listening on port ${port}`);
});