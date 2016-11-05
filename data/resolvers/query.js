export const query = {
   testString: () => {
      return 'new string!!!';
    },
    getUser: (_, { id }) => {
      // return db.findUserWithId(id);
      return {
        _id: 'myId',
        displayName: 'Karnich',
        email: 'myEmail@gmail.com',
        firstName: 'Jesper',
        secondName: 'Christensen',
        birthday: 'old',
      };
    }
}
