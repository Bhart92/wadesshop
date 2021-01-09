const express = require('express');
const router = express.Router();
require('dotenv').config()
const Commerce = require('@chec/commerce.js');

const commerce = new Commerce(`${process.env.STORE_API}`, true);

// const fetch = require('node-fetch');
// const Shopify = require('shopify-api-node');
// const Client = require('shopify-buy');

// Initializing a client to return content in the store's primary language
// const client = Client.buildClient({
//   domain: 'testing2134.myshopify.com',
//   storefrontAccessToken: '17769c351dd7bb038618f7ab3f63bbde'
// }, fetch);


// const shopify = new Shopify({
//   shopName: 'https://testing2134.myshopify.com',
//   apiKey: '17769c351dd7bb038618f7ab3f63bbde',
//   password: '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'
// });


// @route  GET api/auth
// @desc   Retreives products list
// @access Public
router.get('/', async (req, res) => {
  try {
    const productData = await commerce.products.list();

    res.json(productData)


  } catch (error) {
    
  }
// Fetch all products in your shop

});


module.exports = router;