import { User } from "../models";

export const query = {
   testString: () => {
      return 'new string!!!';
    },
    getUser: (_, { id }) => {
      return User.findById(id);
    }
}
