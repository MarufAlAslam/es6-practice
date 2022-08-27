const items = [
    { name: 'Bread', price: 2.50 },
    { name: 'Milk', price: 3.00 },
    { name: 'Cheese', price: 4.00 },
    { name: 'Butter', price: 1.75 },
    { name: 'Coffee', price: 2.50 },
    { name: 'Tea', price: 1.50 },
    { name: 'Cake', price: 3.00 },
    { name: 'Sugar', price: 1.00 },
    { name: 'Salt', price: 1.00 },
    { name: 'Pepper', price: 1.00 },
    { name: 'Cinnamon', price: 5000 },
    { name: 'Chocolate', price: 2.00 },
    { name: 'Cocoa', price: 2.00 },
]

const filteredItems = items.filter(item => item.price === 5000);

console.log(filteredItems);