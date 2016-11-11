import { query } from "./query";
import { user } from "./user";
import { mutation } from "./mutation";

const resolvers = {
  Query: query,
  Mutation: mutation,
  User: user,
};

export default resolvers;
