const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema(
    {
    name: String,
    sortOrder: Number
    },
    {timestamps: true}

)

const Category = mongoose.model("categories", categorySchema)

module.exports = Category;

