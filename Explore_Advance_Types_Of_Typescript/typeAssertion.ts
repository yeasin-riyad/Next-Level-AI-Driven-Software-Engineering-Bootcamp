// 🔹 Type Assertion কি?
// 👉 Type Assertion মানে:
// “আমি TypeScript-কে বলছি—এই value এর type আমি ভালো জানি”
// 📌 এটা runtime-এ কিছু change করে না, শুধু compile time-এ TypeScript-কে guide করে।

let anything: any;

anything = "Mezba";

const kgToGMConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGMConverter(2) as number;

console.log({ result1 });

const result2 = kgToGMConverter("2 kg") as string;

console.log({ result2 });

type CustomError = {
  meesage: string;
};

try {
} catch (err) {
  console.log((err as CustomError).meesage);
}