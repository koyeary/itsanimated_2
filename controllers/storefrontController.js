const Product = require('../models/Product');

module.exports = {
  // @route    GET api/storefront/
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

  // @route    POST api/storefront/
  // @desc     Save new product
  // @access   Private
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
  },

  // @route    UPDATE api/storefront/
  // @desc     Save new product
  // @access   Private
  update: async (req, res) => {
    const { name, price, _id } = req.body;

    try {
      let product = await Product.find({ _id });

      if (!product) {
        return res.status(400).json({
          errors: [{ msg: `Product ${_id} does not exist` }]
        });
      }

      await Product.updateOne({ _id }, { $set: { name, price } });

      return res.status(200).json({ msg: `Product ${_id} updated` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
};
