import { mongoose, connect } from 'mongoose';
import 'dotenv/config';


const URL = 'mongodb://127.0.0.1:27017';
const DATABASE = (process.env.DATABASE_NAME || 'preg-tracker') + (process.env.NODE_ENV === 'test' ? '_test' : '');


mongoose.startConnection = async () => {
  await connect(URL + '/' + DATABASE);
  console.log(`Connected to ${DATABASE} database`);
  return;
}

export default mongoose;