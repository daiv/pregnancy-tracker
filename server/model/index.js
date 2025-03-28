import { mongoose, connect } from 'mongoose';

const URL = 'mongodb://127.0.0.1:27017';
const DATABASE = 'pregnancy-tracker';

mongoose.startConnection = async () => {
  await connect(URL + '/' + DATABASE);
  console.log(`Connected to ${DATABASE} database`);
  return;
}

export default mongoose;