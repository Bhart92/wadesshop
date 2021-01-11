const express = require('express');
const router = express.Router();
require('dotenv').config()
const Commerce = require('@chec/commerce.js');

const commerce = new Commerce(`${process.env.DEFAULT}`, true);

// @route  GET api/auth
// @desc   Retreives products list
// @access Public
router.get('/', async (req, res) => {
  try {
    const productData = await commerce.products.list();
    res.json(productData)

  } catch (error) {
    res.send('Internal Error, Please go back.');
  }

});
// @route  GET api/auth
// @desc   Retreives categories list
// @access Public
// router.get('/categories', async (req, res) => {
//   try {
//      const filteredData = await commerce.categories.retrieve();

//      res.json(filteredData)

//   } catch (error) {
//     res.send('Internal Error, Please go back.');
//   }

// });


module.exports = router;