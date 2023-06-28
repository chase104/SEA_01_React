
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
app.get('/cart', async (req, res) => {
    let dbCart = await Cart.findOne({checkoutDone: false})
    if (dbCart) {
        res.json({
            message: "cart found",
            cart: dbCart
        })
    } else {
        res.json({
            message: "no cart",
            cart: false
        })
    }
})

app.put('/update_cart', async (req, res) => {
    // check if there is an open cart (checkoutDone: false)
    let clickedItem = req.body;
    // if no open carts, make a new cart
    let dbCart = await Cart.findOne({checkoutDone: false})
    console.log(dbCart);
    // if no cart, we get []
    if (dbCart) {
        // there is a cart!
        // if the clicked item is in the array already, +1 to quantity
        // we need to know if we found the item in the cart.
        // so we know if we need to push it to the cart
        let itemIsInCart = false;
        dbCart.items.forEach((quantityObj, index) => {
            console.log(quantityObj.item._id, clickedItem._id);
            if (quantityObj.item._id == clickedItem._id) {
                console.log("passing if check");
                itemIsInCart = true;
                dbCart.items[index].quantity += 1;
            }
        });
        if (!itemIsInCart) {
            dbCart.items.push({quantity: 1, item: clickedItem})
        };
        // else push to the array
      
    } else {
        let response = Cart.create({
            items: [{quantity: 1, item: clickedItem}]
        })
        console.log(response);

   
        // we need to make a cart.
        // using the clicked item!
    }

    dbCart.save()
    res.json(dbCart)
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
