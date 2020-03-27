const books = require('../data');

const resolvers = {
  Query: {
    books: (_, args, { user }) => {
      if (user && user.role !== 'admin') {
        throw new Error('Not Authorized');
      }

      return books
    }
  },
};

module.exports = resolvers;