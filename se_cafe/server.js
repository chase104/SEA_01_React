
const express = require('express');
const dotenv = require('dotenv');
const Cart = require('./models/Cart.js');
const Item = require('./models/ItemModel.js');
const Category = require('./models/Category.js')
dotenv.config(); 


// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database
// connect to myapp database
require('./config/database.js')


const app = express();
app.use(express.json());

app.get("/check_server", (req, res) => {
    res.send("server is good")
})

app.put('/update_cart', async (req, res) => {
    // check if there is an open cart (checkoutDone: false)
    // if no open carts, make a new cart
    let dbResponse = await Cart.find({checkoutDone: false})
    console.log(dbResponse);
    // if no cart, we get []
    if (dbResponse.length) {
        // there is a cart!
    } else {
        // we need to make a cart.
        // using the clicked item!
    }
    // item to add to cart
    // if item is already in cart, +1
    // if item is not in cart, push to cart

})
app.get('/categories', async (req, res) => {
    // get categories
    let categories = await Category.find();
    res.json(categories)
})
app.get('/items', async (req, res) => {
    // get items
    // when we get the items, we want to get the connected categories too.
    let items = await Item.find().populate('category')

    res.json(items)
})
app.listen(4001, () => {
    console.log("listening on 4001")
})
