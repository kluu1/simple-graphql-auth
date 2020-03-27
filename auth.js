const { AuthenticationError } = require('apollo-server');

// This file is where you would implement your authentication strategy
// Eg. AWS Cognito, Passport, JWT, etc.
const getUser = (token) => {
  if (token !== '1234567890') {
    throw new AuthenticationError('Invalid token');
  }

  const user = {
    id: 1,
    username: 'demouser',
    role: 'admin'
  }

  return user;
}

module.exports = getUser;