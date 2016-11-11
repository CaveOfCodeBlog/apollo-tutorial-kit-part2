import { User } from "../models";

export const mutation = {
    createUser: (_, { user }) => {
      console.log("MUTATION CALLED");
      return User.create(user);
    }
}
