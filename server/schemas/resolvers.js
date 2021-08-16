const { Products } = require('../models');

const resolvers = {
  Query: {
    getShopItems: async () => {
      const results =  await Products.find({}).sort({ price: -1 });

      console.log(results);
      return results;
    },
  },

  Mutation: {
    addShopItem: async (_, {name, description, image, price}) => {
      return Products.create({ name, description, image, price });
    }
  },
};

module.exports = resolvers;
