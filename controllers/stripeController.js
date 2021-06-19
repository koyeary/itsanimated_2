const config = require('config');
const stripe = require('stripe')(config.get('stripe_key'));

module.exports = {
  /*   createCustomer: async (req, res) => {
    const { email, cart } = req.body;

    const customer = await stripe.customers.create({
      email: email
    });

    return res.json(customer.id);
  }, */

  createCheckoutSession: async (req, res) => {
    const { quantity, name, images, price } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name,
                images //preview purchase
              },
              unit_amount: 2000
            },
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
  }
};
