import { User as db } from "../connectors";

  const findById = (_id) => {
    return db.findOne({ _id });
  }

  const create = (user) => {
    return db.create(user);
  }

  export const User = {
    findById,
    create
  }
