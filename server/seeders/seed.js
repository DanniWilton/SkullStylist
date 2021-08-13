const dotenv = require('dotenv');
dotenv.config();

const db = require("../config/connection");
const { Products } = require("../models");
const productSeeds = require("./shop-items.json");

db.once('open', async () => {
  try {
    await Products.deleteMany({});
    await Products.create(productSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
