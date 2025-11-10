import cors from 'cors';
import express from 'express';
import router from './router.js';
import mongoose from './model/index.js';

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());
server.use('/', router);

mongoose.startConnection()
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error.message);
    process.exit(1);
  });