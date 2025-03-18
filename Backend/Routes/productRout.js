const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  res.json(data);
});

module.exports = router;
