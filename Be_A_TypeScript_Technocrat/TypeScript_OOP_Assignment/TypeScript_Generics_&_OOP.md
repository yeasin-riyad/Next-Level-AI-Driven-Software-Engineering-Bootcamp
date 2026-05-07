# 🚀 TypeScript Generics & OOP: Scalable Code লেখার শক্তিশালী হাতিয়ার

Modern software engineering-এ scalable, reusable এবং maintainable code লেখা খুব গুরুত্বপূর্ণ। TypeScript আমাদের সেই শক্তি দেয়—বিশেষ করে **Generics** এবং **Object-Oriented Programming (OOP)** এর মাধ্যমে।

এই ব্লগে আমরা দেখবো:

* Generics কীভাবে reusable ও type-safe code তৈরি করে
* OOP-এর ৪টি pillar কীভাবে complex system সহজ করে

---

# 🧠 Part 1: Generics — Reusability + Type Safety

## 🔹 Generics কী?

Generics হলো এমন একটি technique যেখানে তুমি **type কে parameter হিসেবে pass করতে পারো**।

👉 সহজভাবে:

> “একই function, কিন্তু different type এর জন্য reusable”

---

## ❌ Problem (Without Generics)

```ts
function identityNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}
```

👉 এখানে duplication হচ্ছে ❌

---

## ✅ Solution (Using Generics)

```ts
function identity<T>(value: T): T {
  return value;
}
```

👉 এখন:

```ts
identity<number>(10);
identity<string>("hello");
```

✔️ reusable
✔️ type-safe
✔️ clean 🔥

---

## 🔥 Real-world Example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement([1, 2, 3]); // number
const str = getFirstElement(["a", "b"]); // string
```

---

## 🎯 কেন Generics important?

* Code duplication কমায়
* Strong type safety দেয়
* Large-scale project এ maintainability বাড়ায়

---

# 🏗️ Part 2: OOP-এর ৪টি Pillar

OOP-এর ৪টা pillar হলো:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

---

## 🔐 1. Encapsulation (Data Hide করা)

👉 Data + methods একসাথে রাখা এবং direct access restrict করা

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

✔️ data safe
✔️ controlled access

---

## 🎭 2. Abstraction (Complexity hide করা)

👉 user শুধু দরকারি interface দেখে, ভিতরের logic না

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} via Bkash`);
  }
}
```

👉 user শুধু `pay()` জানে, ভিতরের logic না

---

## 👨‍👦 3. Inheritance (Code reuse)

👉 parent class থেকে child class feature নেয়

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

✔️ code reuse
✔️ hierarchy তৈরি হয়

---

## 🎨 4. Polymorphism (Same interface, different behavior)

👉 একই method, different implementation

```ts
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  area(): number {
    return Math.PI * 2 * 2;
  }
}

class Square extends Shape {
  area(): number {
    return 4 * 4;
  }
}
```

👉 একই `area()` → different result 🔥

---

# 🧠 কেন এই ৪টা pillar গুরুত্বপূর্ণ?

| Pillar        | Benefit         |
| ------------- | --------------- |
| Encapsulation | Data protection |
| Abstraction   | Complexity hide |
| Inheritance   | Code reuse      |
| Polymorphism  | Flexibility     |

---

# 🔥 Final Insight

👉 Generics + OOP একসাথে ব্যবহার করলে:

* scalable architecture তৈরি হয়
* code reusable হয়
* bugs কমে
* বড় project manage করা সহজ হয়

---

# 🚀 Conclusion

আজকের modern TypeScript development-এ:

* Generics = reusable + type-safe code
* OOP pillars = clean architecture

👉 এই দুইটা mastery করলে তুমি next-level engineer হয়ে যাবে 🔥

---
