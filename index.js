const { ApolloServer } = require('apollo-server')

const PORT = process.env.PORT || 4001

const user = require('./src/modules/user/index')

const server = new ApolloServer({
  modules: [
    user
  ],

  context: ({ req }) => req.headers
})

server.listen(PORT, () => console.log(PORT))