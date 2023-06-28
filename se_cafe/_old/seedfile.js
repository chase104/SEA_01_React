// "seed files" simple put lots of data into a database (usually at the start)
// connect to MongoDB
require('dotenv').config()
require('../config/database.js');

// use our Models
const Category = require("../models/Category.js");
const Item = require('../models/ItemModel.js');


const populateDatabase = async () => {


    const categories = [
        {name: 'Sandwiches', sortOrder: 10},
        {name: 'Seafood', sortOrder: 20},
        {name: 'Mexican', sortOrder: 30},
        {name: 'Italian', sortOrder: 40},
        {name: 'Sides', sortOrder: 50},
        {name: 'Desserts', sortOrder: 60},
        {name: 'Drinks', sortOrder: 70},
      ]

      await Category.deleteMany()
    //   put categories in the database
      const categoriesFromDB = await Category.insertMany(categories);
      console.log(categoriesFromDB);
      const items = [
        {
          name: 'Hamburger', 
          emoji: '🍔', 
          category: categoriesFromDB[0]._id, 
          price: 5.95, 
          ingredients: ['Beef Patty', 'Bun', 'Lettuce', 'Tomato', 'Onion']
        },
        {name: 'Turkey Sandwich', emoji: '🥪', category: categoriesFromDB[0]._id, price: 6.95, 
        ingredients: ['Turkey', 'Bread', 'Lettuce', 'Tomato', 'Mayonnaise']},
        {name: 'Hot Dog', emoji: '🌭', category: categoriesFromDB[0]._id, price: 3.95, 
        ingredients: ['Hot Dog Bun', 'Sausage', 'Ketchup', 'Mustard', 'Onion']},
    
        {name: 'Crab Plate', emoji: '🦀', category: categoriesFromDB[1]._id, price: 14.95, 
        ingredients: ['Crab', 'Rice', 'Vegetables', 'Sauce']},
    
        {name: 'Fried Shrimp', emoji: '🍤', category: categoriesFromDB[1]._id, price: 13.95, 
        ingredients: ['Shrimp', 'Batter', 'Oil', 'Sauce']},
        
        {name: 'Whole Lobster', emoji: '🦞', category: categoriesFromDB[1]._id, price: 25.95, 
        ingredients: ['Lobster', 'Butter', 'Lemon', 'Garlic']},
    
        {name: 'Taco', emoji: '🌮', category: categoriesFromDB[2]._id, price: 1.95, 
        ingredients: ['Tortilla', 'Meat', 'Lettuce', 'Tomato', 'Cheese']},
    
        {name: 'Burrito', emoji: '🌯', category: categoriesFromDB[2]._id, price: 4.95, 
        ingredients: ['Tortilla', 'Rice', 'Beans', 'Meat', 'Salsa']},
    
        {name: 'Pizza Slice', emoji: '🍕', category: categoriesFromDB[3]._id, price: 3.95, 
        ingredients: ['Pizza Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms']},
    
        {name: 'Spaghetti', emoji: '🍝', category: categoriesFromDB[3]._id, price: 7.95, 
        ingredients: ['Spaghetti Pasta', 'Tomato Sauce', 'Meatballs', 'Parmesan Cheese', 'Basil']},
    
        {name: 'Garlic Bread', emoji: '🍞', category: categoriesFromDB[3]._id, price: 1.95, 
        ingredients: ['Bread', 'Garlic', 'Butter', 'Parsley']},
    
        {name: 'French Fries', emoji: '🍟', category: categoriesFromDB[4]._id, price: 2.95, 
        ingredients: ['Potatoes', 'Oil', 'Salt']},
    
        {name: 'Green Salad', emoji: '🥗', category: categoriesFromDB[4]._id, price: 3.95, 
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Onion', 'Dressing']},
    
        {name: 'Ice Cream', emoji: '🍨', category: categoriesFromDB[5]._id, price: 1.95, 
        ingredients: ['Milk', 'Sugar', 'Flavoring']},
    
        {name: 'Cup Cake', emoji: '🧁', category: categoriesFromDB[5]._id, price: 0.95, 
        ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Frosting']},
    
        {name: 'Custard', emoji: '🍮', category: categoriesFromDB[5]._id, price: 2.95, 
         ingredients: ['Milk', 'Sugar', 'Eggs', 'Vanilla Extract']},
    
        {name: 'Strawberry Shortcake', emoji: '🍰', category: categoriesFromDB[5]._id, price: 3.95, 
        ingredients: ['Sponge Cake', 'Strawberries', 'Whipped Cream']},
    
        {name: 'Milk', emoji: '🥛', category: categoriesFromDB[6]._id, price: 0.95, 
        ingredients: ['Milk']},
    
        {name: 'Coffee', emoji: '☕', category: categoriesFromDB[6]._id, price: 0.95, 
        ingredients: ['Coffee Beans', 'Water']},
    
        {name: 'Mai Tai', emoji: '🍹', category: categoriesFromDB[6]._id, price: 8.95, 
        ingredients: ['Rum', 'Lime Juice', 'Orgeat Syrup', 'Orange Liqueur', 'Garnish']},
    
        {name: 'Beer', emoji: '🍺', category: categoriesFromDB[6]._id, price: 3.95, 
        ingredients: ['Barley', 'Hops', 'Water', 'Yeast']},
    
        {name: 'Wine', emoji: '🍷', category: categoriesFromDB[6]._id, price: 7.95, 
        ingredients: ['Grapes', 'Yeast', 'Sugar']}
      ]
    //   in case we already did this, we do not want double, so we will delete everything first
    await Item.deleteMany()
      const itemsFromDB = await Item.insertMany(items)
    //   this array has category IDs

    //   get response from the database (DB will give us the created categories)
    //  We need the category ids !!!!

}

populateDatabase()

