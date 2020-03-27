const { ApolloServer, AuthenticationError } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolver');
const getUser = require('./auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers
    const token = req.headers.authorization || '';

    // throw error if token is missing
    if (!token) {
      throw new AuthenticationError('Required token is missing');
    }

    // try to retrieve a user with the token
    const user = getUser(token);

    // add the user to the context
    return { user };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
