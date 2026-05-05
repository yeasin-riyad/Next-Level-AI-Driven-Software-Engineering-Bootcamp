// Concepts: keyof, Generics

// Task 6: The Property Guard HARD
// Concepts: keyof, Generics
// Scenario: Create a utility that gets a property from an object while preventing typos
// at compile-time.

// const product = { id: 101, name: "Keyboard", price: 50 };

// Instructions:
// Create a function getProductProp<T, K>(obj: T, key: K).
// Constraint K to be a valid key of T.
// Return obj[key].
// Hint: Use <T, K extends keyof T>.

interface Product123 {
  id: number;
  name: string;
  price: number;
};

const getProductProp = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
}

const product123: Product123 = { id: 101, name: "Keyboard", price: 50 };

console.log(getProductProp(product123, "name")); // ✅ Valid key
// console.log(getProductProp(product123, "invalidKey")); // ❌ Invalid key - TypeScript error
