const { gql } = require('apollo-server-express');

const typeDefs = gql`
type ShopItem {
  _id: ID
  name: String! 
  description: String!
  image: String!
  price: String!
}

type Query {
  getShopItems: [ShopItem]!
}

type Mutation {
  addShopItem(name: String!, description: String!, image: String!, price: String!): ShopItem
}

`;

module.exports = typeDefs;
