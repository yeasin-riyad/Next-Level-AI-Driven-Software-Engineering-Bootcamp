// keyof : type operator

type RichPeoplesVehicle44 = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type MyVehicle19 = "bike" | "car" | "cng";
// Or
type Myvehicle27 = keyof RichPeoplesVehicle44;

// const myVehicle90: Myvehicle27 = "ship";

type User1 = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User1 = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};

// //const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

//console.log({ myId, myName, address });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result23 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");