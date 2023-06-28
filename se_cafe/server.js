
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
        dbCart.save()
        res.json(dbCart)
    } else {
        let newCart = await Cart.create({
            items: [{quantity: 1, item: clickedItem}]
        })
        res.json(newCart);

        // we need to make a cart.
        // using the clicked item!
    }


    // item to add to cart
    // if item is already in cart, +1
    // if item is not in cart, push to cart

})

app.put('/subtract_quantity', async (req, res) => {
    const clickedItem = req.body;
    // get cart from db
    let dbCart = await Cart.findOne({checkoutDone: false});
    // find the correct item in the cart
    //  there are many items, so we need to loop and check the ids
    dbCart.items.forEach((quantityItem, index) => {
        if (clickedItem._id == quantityItem.item._id) {
            // this is the correct item!
                // -1 to the quantity (and remove from array if <= 0)
            dbCart.items[index].quantity -= 1;
            // if quantity is now <= 0, take out of cart!
            if (dbCart.items[index].quantity <= 0) {
                dbCart.items.splice(index, 1)
            }
        }
    })

    // .save
    dbCart.save() // send new cart to MongoDB
    // send new cart to the frontend
    res.json(dbCart)
})

app.put("/checkout_cart", async (req, res) => {
    // OPTION 1
    // get cart form DB
    // change checkoutDone to true
    // .save

    // OPTION 2
    // use the findOneAndUpdate method
    let dbResponse = await Cart.findOneAndUpdate({checkoutDone: false}, {checkoutDone: true});
    res.send(dbResponse)

})


app.get('/old_orders', async (req, res) => {
    let dbResponse = await Cart.find({checkoutDone: true});
    console.log(dbResponse);
    res.send(dbResponse)
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
