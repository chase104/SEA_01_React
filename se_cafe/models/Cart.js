const mongoose = require("mongoose");
const itemSchema = require("./ItemSchema");

const itemWithQuantitySchema = mongoose.Schema({
    quantity: Number,
    item: itemSchema
}, {toJSON: {virtuals: true}});

itemWithQuantitySchema.virtual('totalPrice').get(function() {
    let total = this.quantity*this.item.price;
    // add + to a string will turn it into a number
    let newTotal = +total.toFixed(2)
    return newTotal;
});

const cartSchema = new mongoose.Schema(
    {
        checkoutDone: {type: Boolean, default: false},
        items: {type: [itemWithQuantitySchema], required: true} 
    },
    {timestamps: true, toJSON: {virtuals: true}}

)

cartSchema.virtual('totalQuantity').get(function() {
    // look and count the quantities of the items
    // let totalOfAll = this.items.reduce((total, currentItem) => {
    //     return total + currentItem.quantity
    // }, 0)
    // return totalOfAll;
    let totalOfAll = 0;
    for(let i=0; i<this.items.length; i++){
        totalOfAll += this.items[i].quantity
    }
    return totalOfAll;
})

cartSchema.virtual('totalCartPrice').get(function() {
    // look and count the quantities of the items
    // let totalOfAll = this.items.reduce((total, currentItem) => {
    //     return total + currentItem.quantity
    // }, 0)
    // return totalOfAll;
    let totalOfAll = 0;
    for(let i=0; i<this.items.length; i++){
        console.log(this.items[i].totalPrice);
        totalOfAll += this.items[i].totalPrice
    }
    let newTotal = +totalOfAll.toFixed(2);
    return newTotal;
})

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

