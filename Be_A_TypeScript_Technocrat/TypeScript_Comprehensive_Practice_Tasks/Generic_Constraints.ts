// Concepts: Generics, Extends Constraint

// Task 5: Generic Constraints MEDIUM
// Concepts: Generics, Extends Constraint
// Scenario: You want a function that logs the length of various inputs (strings, arrays)
// but rejects types that don't have a .length.
// Instructions:
// Write a generic function logLength<T>(input: T).
// Constrain T to ensure it must have a length property of type number.
// Return the length value.
// Hint: Use <T extends { length: number }>.

const logLength=<T extends {length:number}>(param:T):number=>{
    return param.length;
}

console.log(logLength<string>("typescript is awesome"));
console.log(logLength<number[]>([1,2,3,4,5]));
console.log(logLength<{length:number}>({length:10}));
console.log(logLength({name:"yeasin",length:3}))