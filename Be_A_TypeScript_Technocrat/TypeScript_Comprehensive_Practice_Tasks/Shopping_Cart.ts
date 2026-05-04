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