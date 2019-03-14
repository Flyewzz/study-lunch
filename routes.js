const express = require('express');
const router = express.Router();

const db = require('./db');

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});
// define the home page route
router.get('/', (req, res) => {
  db.query("SELECT * FROM Categories", (err, categories) => {
    if (err) {
      console.log('Connection error (categories)');
      return;
    }
    res.render('index', {categories: categories});
  });
});
// define the about route
router.get('/cart', (req, res) => {
  res.send('A shopping cart');
});

module.exports = router;