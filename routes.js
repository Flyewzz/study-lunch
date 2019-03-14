const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});
// define the home page route
router.get('/', (req, res) => {
  res.send('Home page');
});
// define the about route
router.get('/cart', (req, res) => {
  res.send('A shopping cart');
});

module.exports = router;