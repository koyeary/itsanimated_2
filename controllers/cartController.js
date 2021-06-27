const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports = {

  // @route    GET api/cart/:sessionId
  // @desc     Get all cart items
  // @access   Public
  getCart: async (req, res) => {
    const { sessionId } = req.params.id

    try {
      const cart = await Cart.findOne({ sessionId });
      return res.json(cart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  // @route    POST api/cart:sessionId
  // @desc     Add to or create cart
  // @access   Public
  addCart: async (req, res) => {
      const { sessionId } = req.params.id
      const { id, quantity } = req.body;

      try {
        let cart = await Cart.findOne({ sessionId });
        let product = await Product.findOne({ id });

        if (!product) {
            res.status(404).send('Item not found');
        }

        const price = product.price;
        const name = product.name;

        if (cart) {
            let itemIndex = cart.items.findIndex(p => p.id == id);

            if (itemIndex > -1)
            {
                let item = cart.items[itemIndex];
                item.quantity += quantity;
                cart.items[itemIndex] = item;
            } else {
                cart.items.push({ id, name, price, quantity });
            }
            cart.bill += quantity * price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }

        else {
            const newCart = await Cart.create({
                sessionId,
                items: [{ productId, name, quantity, price }],
                bill: quantity * price
            });
            return res.status(201).send(newCart);
        }
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
      }
  },

  // @route    DELETE api/cart/:id
  // @desc     Delete item from cart
  // @access   Public
  deleteCartItem: async (req, res) => {
    const { sessionId } = req.params.id
    const { id } = req.body;

    try {
        let cart = await Cart.findOne({ sessionId });
        let itemIndex = cart.items.findIndex(p => p.id == id);
        if (itemIndex > -1) 
        {
            let cartItem = cart.items[itemIndex];
            cart.bill -= cartItem.quantity * cartItem.price;
            cart.items.splice(itemIndex, 1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
  },

  // @route    DELETE api/cart/
  // @desc     Delete all items in cart
  // @access   Public
  clearCart: async (req, res) => {
    const { sessionId } = req.params.id

    try {
        let cart = await Cart.findOne({ sessionId });
        
        if (!cart) {
            return res.status(400).json({
                errors: [{ msg: 'Cart not found' }]
            });
        }

        cart = await cart.remove();
        return res.status(200).json({ msg: `Cart deleted` });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
  }
};


