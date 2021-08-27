const config = require('config');
const Stripe = require('stripe');
const stripe = Stripe(config.get('stripe_key'));
const Product = require('../models/Product');

module.exports = {
  addToStripe: async (name, description, unit_amount) => {
    try {
      const product = await stripe.products.create({
        name: `${name} - ${description}`,
        active: true
      });

      await Product.updateOne({ name }, { productID: product.id });

      const price = await stripe.prices.create({
        unit_amount: unit_amount,
        currency: 'usd',
        product: product.id
      });

      return console.log(`${name} created, ${price}`);
    } catch (err) {
      return console.error(err.message);
    }
  },

  updatePrice: async (req, res) => {
    const { id, product, unit_amount } = req.body;

    try {
      const price = await stripe.prices.update(id, {
        product: product,
        unit_amount: unit_amount
      });

      return res.status(200).send(price);
    } catch (err) {
      res.status(500).send(`Server error: ${err.message} for ${id}`);
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
