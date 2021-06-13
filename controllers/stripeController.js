const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


module.exports = {
   createCustomer: async (req, res) => {
        const { email, cart } = req.body;
      
        const customer = await stripe.customers.create({
          email: email
        });
      
        res.json(customer.id);
      }
}