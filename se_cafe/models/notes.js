let itemExample = {
    name: 'Hamburger', 
    emoji: '🍔', 
    category: categories[0].name, 
    price: 5.95, 
    ingredients: ['Beef Patty', 'Bun', 'Lettuce', 'Tomato', 'Onion']
  }
// cart / order
let itemWithQuantity = {
    quantity: Number,
    item: ItemSchema

}

let cartExample = {
    // how many items total
    // totalprice
    items: [itemWithQuantity]
}