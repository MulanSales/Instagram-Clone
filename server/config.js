module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '60b9e82ab4b44798af16c8ddf8eaf62c',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};