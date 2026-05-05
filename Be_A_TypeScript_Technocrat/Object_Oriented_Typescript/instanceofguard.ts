//oop : instance of type guard/ type narrowing

class Person12 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}

class Student12 extends Person12 {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}

class Teacher12 extends Person12 {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}

// function guard

const isStudent = (user: Person12) => {
  return user instanceof Student12; // user is Student12
};

const isTeacher = (user: Person12) => {
  return user instanceof Teacher12; // user is Teacher12
};

const getUserInfo19 = (user: Person12) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student17 = new Student12("Mr. student");
const teacher17 = new Teacher12("Mr. teacher");
const person1 = new Person12("Mr. Person");

getUserInfo19(student17);
getUserInfo19(teacher17);
getUserInfo19(person1);