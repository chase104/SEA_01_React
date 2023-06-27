const mongoose = require("mongoose");
const itemSchema = require("./ItemSchema");

const itemWithQuantity = mongoose.Schema({
    quantity: Number,
    item: itemSchema
});

const cartSchema = new mongoose.Schema(
    {
        checkoutDone: {type: Boolean, default: false},
        items: [itemWithQuantity]
    },
    {timestamps: true}

)


let exampleCart = {
    items: [
        {
            quantity: 3,
            item:  {
                name: 'Hamburger', 
                emoji: '🍔', 
                category: "Sandwiches", 
                price: 5.95, 
                ingredients: ['Beef Patty', 'Bun', 'Lettuce', 'Tomato', 'Onion']
              }
        },
        {
            quantity: 7,
            item: {
                name: 'Fried Shrimp', 
                emoji: '🍤', 
                category: "Seafood", 
                price: 13.95, 
                ingredients: ['Shrimp', 'Batter', 'Oil', 'Sauce']
            }
        }
    ]
}

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart;

