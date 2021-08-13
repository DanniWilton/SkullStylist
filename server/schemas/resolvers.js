const { Shop } = require('../models');

const resolvers = {
  Query: {
    getShopItems: async () => {
      return await Shop.find().sort({ price: -1 });
    },
  },

  Mutation: {
    addShopItem: async (_, {name, description, image, price}) => {
      return Shop.create({ name, description, image, price });
    }
  },
};

module.exports = resolvers;
