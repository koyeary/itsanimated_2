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

  // @route    GET api/storefront/search
  // @desc     Get product by name
  // @access   Public
   getItem: async (req, res) => {
    const { name } = req.body;

    try {
      const product = await Product.findOne({ name });
      return res.json(product);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }, 

  // @route    POST api/storefront/
  // @desc     Save new product
  // @access   Private
  create: async (req, res) => {
    const { name, price, category, image_src } = req.body;

    try {
      let product = await Product.findOne({ name });

      if (product) {
        return res.status(400).json({
          errors: [{ msg: 'A product with this name already exists' }]
        });
      }

      product = new Product({
        name,
        price,
        category,
        image_src
      });

      await product.save();

      return res.status(200).json({ msg: 'Product successfully created' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  // @route    PUT api/storefront/
  // @desc     Save new product
  // @access   Private
  update: async (req, res) => {
    const { name, price, category, image_src, _id } = req.body;

    try {
      let product = await Product.findOne({ _id });

      if (!product) {
        return res.status(400).json({
          errors: [{ msg: `Could not find product id ${_id}` }]
        });
      }

      await Product.updateOne({ _id }, { $set: { name, price, category, image_src } });

      return res.status(200).json({ msg: `Product ${_id} updated` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  // @route    DELETE api/storefront
  // @desc     Save new product
  // @access   Private
  erase: async (req, res) => {

     try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(400).json({
          errors: [{ msg: `Could not find product id ${id}` }]
        });
      }

      await product.remove();

      return res.status(200).json({ msg: `Product ${_id} deleted` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    } 
  }
};
