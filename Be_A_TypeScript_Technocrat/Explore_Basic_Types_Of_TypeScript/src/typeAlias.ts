// Type Alias = existing type-এর short / custom নাম
//👉 এখানে User হলো একটা custom type
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0177",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};


//🔹 Literal Type Alias
type IsAdmin = true;
const isAdmin: IsAdmin = true;
// 👉 এখানে:
// IsAdmin শুধু true হতে পারবে
// false দিলে error ❌


//🔹 Primitive Type Alias
type Name = string;
const myName: Name = "Me. X";
// 👉 string এর একটা alias বানানো হয়েছে

// function
//🔹 Function Type Alias
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;