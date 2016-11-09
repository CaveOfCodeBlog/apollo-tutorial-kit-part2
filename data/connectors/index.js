import * as Mongoose from 'mongoose';

const CarSchema = new Mongoose.Schema({
  model: String,
  registrationNo: String,
  owner: Mongoose.Schema.Types.ObjectId,
});

const UserSchema = new Mongoose.Schema({
  displayName: String,
  email: String,
  firstName: String,
  lastName: String,
  birthday: String,
});

export const User = Mongoose.model('User', UserSchema);
export const Car = Mongoose.model('Car', CarSchema);


export const MongooseConnection = Mongoose.connect('mongodb://localhost:27017/test')
  .catch((connectError) => {
    console.error('Could not connect to MongoDB on port 27017', connectError);
  });
