import mongoose from './index.js';

const lpdSchema = new mongoose.Schema({
  lpd: {
    type: Date,
    required: true
  }
});


const Lpd = mongoose.model('lpd', lpdSchema);

export async function getLpd() {
  return await Lpd.find();
}

export async function setLpd(lpdObj) {

  const previous = await Lpd.find();

  if (previous.length !== 0) return await previous[0].updateOne(lpdObj);

  const newLpd = new Lpd(lpdObj);

  return await newLpd.save();

}