class Person {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number;

  constructor(name?: string, lastName?: string, age: number = 0) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
  }

  greet(friend: string): string {
    return "Hello " + friend + ", My name is " + this.firstName;
  }
}

let maria: Person = new Person();
maria.firstName = "Maria";
maria.lastName = "Levasca";
maria.age = 25;

let isaac: Person = new Person();
isaac.firstName = "Isaac";
isaac.lastName = "Delahaye";

maria.greet(isaac.firstName);
