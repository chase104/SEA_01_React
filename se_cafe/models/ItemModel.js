const mongoose = require('mongoose')
const itemSchema = require('./ItemSchema.js')



const Item = mongoose.model("Item", itemSchema)

module.exports = Item;