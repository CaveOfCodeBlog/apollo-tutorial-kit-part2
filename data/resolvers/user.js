import { Car } from "../models";

export const user = {
  cars(user) {
      return Car.findByOwner(user._id);
    }
}