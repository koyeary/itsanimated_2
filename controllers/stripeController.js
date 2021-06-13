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
    // const { quantity, name, images }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Stubborn Attachments',
              images: ['https://i.imgur.com/EHyR2nP.png'] //preview purchase
            },
            unit_amount: 2000
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `http://localhost:5000`, //purchase successful page
      cancel_url: `http://localhost:8080`   //purchase cancelled page
    });
    return res.json({ id: session.id });
  }
};
