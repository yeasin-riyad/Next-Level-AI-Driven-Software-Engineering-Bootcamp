// polymorphism : bohurupi

// 🔹 Polymorphism কী?
// 👉 Polymorphism মানে:
// একই method / function, কিন্তু object ভেদে ভিন্নভাবে কাজ করে
// 📌 এক লাইনে:
// “Same interface, different behavior”

class Person66 {
  getSleep() {
    console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
  }
}

class Student66 extends Person66 {
  getSleep() {
    console.log(`I am a student. I sleep  7 hours`);
  }
}

class NextLevelDeveloper66 extends Person66 {
  getSleep() {
    console.log(`I am a Next Level developer . I sleep for 6 hours`);
  }
}

// 👉 এখানে:
// তিনটা class-এই getSleep() আছে
// কিন্তু output আলাদা 😮

const getSleepingHours = (param: Person66) => {
  param.getSleep();
};

const person10 = new Person66();
const person2 = new Student66();
const person3 = new NextLevelDeveloper66();

getSleepingHours(person3);



class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  // area= pi*r*r
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  // area= height*width

  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);

// 🔹 এটা কীভাবে কাজ করে?
// 👉 এটা হয় Method Overriding দিয়ে
// child class → parent method override করে
// runtime-এ decide হয় কোনটা call হবে
// 📌 এটাকে বলে: Runtime Polymorphism

//👉 “একই function, ভিন্ন object অনুযায়ী ভিন্নভাবে কাজ করা = Polymorphism”