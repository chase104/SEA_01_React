
export const categories = [
    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]
  
// create many
  
export const items = [
    {
      name: 'Hamburger', 
      emoji: '🍔', 
      category: categories[0].name, 
      price: 5.95, 
      ingredients: ['Beef Patty', 'Bun', 'Lettuce', 'Tomato', 'Onion']
    }
    ,

    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0].name, price: 6.95, 
    ingredients: ['Turkey', 'Bread', 'Lettuce', 'Tomato', 'Mayonnaise']},

    {name: 'Hot Dog', emoji: '🌭', category: categories[0].name, price: 3.95, 
    ingredients: ['Hot Dog Bun', 'Sausage', 'Ketchup', 'Mustard', 'Onion']},

    {name: 'Crab Plate', emoji: '🦀', category: categories[1].name, price: 14.95, 
    ingredients: ['Crab', 'Rice', 'Vegetables', 'Sauce']},

    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1].name, price: 13.95, 
    ingredients: ['Shrimp', 'Batter', 'Oil', 'Sauce']},
    
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1].name, price: 25.95, 
    ingredients: ['Lobster', 'Butter', 'Lemon', 'Garlic']},

    {name: 'Taco', emoji: '🌮', category: categories[2].name, price: 1.95, 
    ingredients: ['Tortilla', 'Meat', 'Lettuce', 'Tomato', 'Cheese']},

    {name: 'Burrito', emoji: '🌯', category: categories[2].name, price: 4.95, 
    ingredients: ['Tortilla', 'Rice', 'Beans', 'Meat', 'Salsa']},

    {name: 'Pizza Slice', emoji: '🍕', category: categories[3].name, price: 3.95, 
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms']},

    {name: 'Spaghetti', emoji: '🍝', category: categories[3].name, price: 7.95, 
    ingredients: ['Spaghetti Pasta', 'Tomato Sauce', 'Meatballs', 'Parmesan Cheese', 'Basil']},

    {name: 'Garlic Bread', emoji: '🍞', category: categories[3].name, price: 1.95, 
    ingredients: ['Bread', 'Garlic', 'Butter', 'Parsley']},

    {name: 'French Fries', emoji: '🍟', category: categories[4].name, price: 2.95, 
    ingredients: ['Potatoes', 'Oil', 'Salt']},

    {name: 'Green Salad', emoji: '🥗', category: categories[4].name, price: 3.95, 
    ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Onion', 'Dressing']},

    {name: 'Ice Cream', emoji: '🍨', category: categories[5].name, price: 1.95, 
    ingredients: ['Milk', 'Sugar', 'Flavoring']},

    {name: 'Cup Cake', emoji: '🧁', category: categories[5].name, price: 0.95, 
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Frosting']},

    {name: 'Custard', emoji: '🍮', category: categories[5].name, price: 2.95, 
     ingredients: ['Milk', 'Sugar', 'Eggs', 'Vanilla Extract']},

    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5].name, price: 3.95, 
    ingredients: ['Sponge Cake', 'Strawberries', 'Whipped Cream']},

    {name: 'Milk', emoji: '🥛', category: categories[6].name, price: 0.95, 
    ingredients: ['Milk']},

    {name: 'Coffee', emoji: '☕', category: categories[6].name, price: 0.95, 
    ingredients: ['Coffee Beans', 'Water']},

    {name: 'Mai Tai', emoji: '🍹', category: categories[6].name, price: 8.95, 
    ingredients: ['Rum', 'Lime Juice', 'Orgeat Syrup', 'Orange Liqueur', 'Garnish']},

    {name: 'Beer', emoji: '🍺', category: categories[6].name, price: 3.95, 
    ingredients: ['Barley', 'Hops', 'Water', 'Yeast']},

    {name: 'Wine', emoji: '🍷', category: categories[6].name, price: 7.95, 
    ingredients: ['Grapes', 'Yeast', 'Sugar']}
  ]