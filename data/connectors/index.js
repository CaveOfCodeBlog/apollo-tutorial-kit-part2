import * as Mongoose from "mongoose";

export const MongooseConnection = Mongoose.connect("mongodb://localhost:27017/test")
  .catch((connectError) => {
    console.error("Could not connect to MongoDB on port 27017", connectError);
  });
