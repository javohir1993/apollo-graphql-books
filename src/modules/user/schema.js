const { gql } = reqiure('apollo-server')

const typeDefs = gql `

  extend type Query {

  }

`

module.exports = typeDefs