const config = require('config');
const Stripe = require('stripe');
const stripe = Stripe(config.get('stripe_key'));
const { create } = require('./inventoryController');

module.exports = {
  addToStripe: async (req, res) => {
    const { name, images, description } = req.body;

    try {
      const product = await stripe.products.create(
        {
          name: name,
          active: true
        } 
      );

      return res.status(200).send(product.id);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Stripe server error');
    }
  },

  createPrice: async (req, res) => {
    const { product, unit_amount } = req.body;

    try {
      const price = await stripe.prices.create({
        unit_amount: unit_amount,
        currency: 'usd',
        product: product
      });

      return res.status(200).send(price.id);

    } catch (err) {

      res.status(500).send(`Server error: ${err.message}`);
    }
  },

  updatePrice: async (req, res) => {
    const { id, product, unit_amount } = req.body;

     try {
      const price = await stripe.prices.updatePrice({
        id: id, 
        product: product,
        unit_amount: unit_amount
      });

      return res.status(200).send(price.id);

    } catch (err) {

      res.status(500).send(`Server error: ${err.message}`);
    }
  }
  /*
  createCheckoutSession: async (req, res) => {
    const { quantity, price } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price,
            quantity
          }
        ],
        mode: 'payment',
        success_url: `http://localhost:5000`, //purchase successful page
        cancel_url: `http://localhost:8080` //purchase cancelled page
      });

      return res.json({ id: session.id });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }*/
};
