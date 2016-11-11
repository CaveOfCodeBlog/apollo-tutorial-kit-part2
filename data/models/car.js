import { Car as db } from "../connectors";

  const findById = (_id) => {
    return db.findOne({ _id });
  }

  const findByOwner = (owner) => {
    return db.find({ owner });
  }

  const create = (user) => {
    return db.create(user);
  }

  export const Car = {
    findById,
    findByOwner,
    create
  }
