class MyMath {
  constructor() {}

  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

const math = new MyMath();
console.log(math.add(1, 2));
console.log(math.subtract(1, 2));

// Constructor

class Product {
  private id: number;

  constructor(public name: string, public price: number) {
    this.id = Math.random();
  }

  // This is a method
  showInfo() {
    console.log(`${this.name} costs ${this.price}`);
  }
}

const product1 = new Product("TV", 1000);
const product2 = new Product("Phone", 2000);

product1.showInfo();
product2.showInfo();

// Class with interfaces

interface IUser {
  name: string;
  lastname: string;
  register(): string;
}

class User implements IUser {
  constructor(public name: string, public lastname: string) {}

  register() {
    return `${this.name} ${this.lastname} is registered`;
  }
}

const user = new User("Ryan", "Ray");
console.log(user.register());

// Class inheritance

class Person {
  constructor(public name: string, public lastname: string) {}
}

const joe = new Person("Joe", "Smith");
console.log(joe);

// Subclass
class Programmer extends Person {
  constructor(
    firstname: string,
    lastname: string,
    public language: string
  ) {
    super(firstname, lastname);
  }
}

const ryan = new Programmer("Ryan", "Ray", "JavaScript");
console.log(ryan);
