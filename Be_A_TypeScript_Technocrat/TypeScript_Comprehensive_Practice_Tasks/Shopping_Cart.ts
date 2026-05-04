// Concepts: Destructuring, Optional Properties, Default Values

// Task 1: The "Optional" Shopping Cart EASY
// Concepts: Destructuring, Optional Properties, Default Values
// Scenario: You are building a checkout system. Users might buy one item by default,
// or specify a bulk quantity.

// type CartItem = {
// name: string;
// price: number;
// quantity?: number;
// };

// Instructions:
// Write a function calculateTotal that takes a CartItem object.
// Use Destructuring to extract properties.
// If quantity is missing, ensure the calculation treats it as 1.
// Return the total cost (price * quantity).
// Hint: Set a default value during destructuring: { quantity = 1 } = item.

type CartItem={
    name:string;
    price:number;
    quantity?:number;
};

const calculateTotal=(item:CartItem):number=>{
    const {name,price,quantity=1}=item;
    return price*quantity;
}

const item1:CartItem={
    name:'Laptop',
    price:1000,
    quantity:2
};

const item2:CartItem={
    name:'Phone',
    price:500
};

console.log(calculateTotal(item1));
console.log(calculateTotal(item2));