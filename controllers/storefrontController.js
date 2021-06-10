const Product = require('../models/Product');

module.exports = {
  // @route    GET api/shop/
  // @desc     Get all products
  // @access   Public
  findAll: async (req, res) => {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  create: async (req, res) => {
    const { name, price } = req.body;

    try {
      let product = await Product.findOne({ name });

      if (product) {
        return res.status(400).json({
          errors: [{ msg: 'A product with this name already exists' }]
        });
      }

      product = new Product({
        name,
        price
      });

      await product.save();

      return res.status(200).json({ msg: 'Product creation successful' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
};
