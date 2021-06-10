const config = require('config');

const Product = require('../models/Product');

module.exports = {

    getAll: async (req, res) => {
        try {
            
        
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
}