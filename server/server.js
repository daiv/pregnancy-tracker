import cors from 'cors';
import express from 'express';
import router from './router.js';
import bodyParser from 'body-parser';
import mongoose from './model/index.js';


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  mongoose.startConnection();
  console.log(`listening on port ${port}`);
});