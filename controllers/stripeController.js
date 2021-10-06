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
    
      await Product.updateOne({ name }, { priceID: price.id });

    } catch (err) {
      return console.error(err.message);
    }
  },

  createCheckoutSession: async (req, res) => {
    const { lineItems } = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      payment_method_types: [
        'card',
      ],
      mode: 'payment',
      success_url: `localhost:3000/success.html`,
      cancel_url: `localhost:3000/cancel.html`,
    });
    res.redirect(303, session.url)
  },
/* 
  eraseFromStripe: async (req, res) => {
    try {
      const deleted = await stripe.products.deleted(productID);
      //update price to inactive

      return res.sendconsole.log(deleted);

    } catch (err) {
      console.error(err);
    }

  } */
};
