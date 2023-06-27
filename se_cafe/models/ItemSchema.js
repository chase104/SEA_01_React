const mongoose = require("mongoose");



const itemSchema = new mongoose.Schema(
    {
    name: { type: String, required: true},
    emoji: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
    price: Number,
    ingredients: [String]
    },
    
    {timestamps: true}

)
// we will use the itemSchema 2 times.
// 1.  in the Item model
// 2. in the cart items schema


// items collection
module.exports = itemSchema;

