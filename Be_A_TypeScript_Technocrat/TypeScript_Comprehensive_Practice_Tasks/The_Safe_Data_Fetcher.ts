// Concepts: Optional Chaining (?.), Nullish Coalescing (??)

// Task 3: The "Safe" Data Fetcher MEDIUM
// Concepts: Optional Chaining (?.), Nullish Coalescing (??)
// Scenario: API responses can be unpredictable. You need to safely access a deep
// property without causing a crash.

// type UserResponse = {
// info?: {
// address?: {
// zipCode?: string;
// }
// }
// };

// Instructions:
// Write a function getZipCode that reaches deep into the object.
// If any part of the path is missing, or if the zipCode is null/undefined, return
// "00000".

// Hint: Chain ?. for every level and end with ?? "00000".

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    }
  }
};

const getZipCode = (response: UserResponse): string => {
  return response.info?.address?.zipCode ?? "00000";
};

const response1: UserResponse = {
  info: {
    address: {
      zipCode: "12345"
    }
  }
};

const response2: UserResponse = {
  info: {
    address: {}
  }
};

const response3: UserResponse = {};

console.log(getZipCode(response1));
console.log(getZipCode(response2));
console.log(getZipCode(response3));
