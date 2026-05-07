// Problem 1 :-
const filterEvenNumbers = (numbers:number[]):number[]=>{
    return numbers.filter(num=>num%2===0);

};

// Problem 2:-
const reverseString=(str:string):string=>{
    return str.split('').reverse().join('');
}


// Problem 3:-
const checkType=(val:string | number):string | number=>{
    if(typeof val==="string") return "String";
    return "Number";
}

// Problem 4:-
const getProperty=<X>(obj:X,key:keyof X)=>{
    return obj[key];
}


// Problem 5:-
interface Book{
    title:string,
    author:string,
    publishedYear:number

}

const toggleReadStatus=(book:Book):Book & {isRead:boolean}=>{
    return {
        ...book,
        isRead: true
    }
}


// Problem 6:-
class Person1122{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    
}

class Student1122 extends Person1122{
    grade:string;
    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade=grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`

    }

}


// Problem 7:-

const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
    const set2 = new Set(arr2); 
  return [...new Set(arr1)].filter(num => set2.has(num));
}

