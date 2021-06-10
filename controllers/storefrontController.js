const Product = require('../models/Product');

module.exports = {

    // @route    GET api/shop/
    // @desc     Get all products
    // @access   Public
    findAll: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
}