// Concepts: Intersection Types (&)

// Task 2: Merging User Profiles EASY
// Concepts: Intersection Types (&)
// Scenario: A user signs up as a basic Person, but when hired, they gain
// JobDetails. An Employee is a union of both.

// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };

// Instructions:
// Create a new type Employee that combines Person and JobDetails.
// Write a function getProfile that accepts an Employee.
// Return a string: "Name: [name], Role: [role]".
// Hint: Use the & operator to merge the two types.

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee): string => {
  return `Name: ${employee.name}, Role: ${employee.role}`;
};

const employee1: Employee = {
  name: "Alice",
  age: 30,
  role: "Developer",
  salary: 80000,
};

console.log(getProfile(employee1));