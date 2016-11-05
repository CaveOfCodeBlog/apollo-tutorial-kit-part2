export const user = {
  cars(user) {
      // return db.findCarWithOwner(user._id);
      return [
        { _id: '230cx', model: 'Speedster', registrationNo: 'X32C211', owner: 'myId' },
        { _id: '54pc3', model: 'Slowster', registrationNo: 'X212X45', owner: 'myId' }
      ];
    }
}