// Basic function
function print(message: string) {
  console.log(message);
}
print("Hello world");

// Function with types
function print2(message: string): void {
  console.log(message);
}
print2("Hello world");

// Return type
function greets(name: string): string {
  return `Hello + ${name}`;
}
console.log(greetMe("Juan"));

function add(x: number, y: number): number {
  return x + y;
}

const add2 = (x: number, y: number): number => x + y;

// union types in parameters
function countChars(message: string | number): void {
  console.log(message.toString().length);
}

countChars(200);
countChars("hello");

// array as parameter
const squares = (array: number[]) => array.map((x) => x * x);
const resultSquares = squares([10, 3, 4]);
console.log(resultSquares);

function myVoid(): void {
  return;
}

// function annotation with parameter
// type annotation and return type annotation
let sayHello: (name: string) => string;

// implementation
sayHello = (name: string) => {
  return "Hello" + name;
};

//optional parameter
// when is not parameter, ts assign null value to it
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y;
}

function greetMe(name: string, greeting?: string): string {
  if (!greeting) {
    greeting = "Hello";
  }
  return greeting + ", " + name;
}

// default parameter
function greetMeRefactored(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

// overloads
// we can use the add strings and numbers
function polimorphicAdd(x: string, y: string): string;
function polimorphicAdd(x: number, y: number): number;
function polimorphicAdd(x: any, y: any): any {
  return x + y;
}

console.log(polimorphicAdd(10, 20));
console.log(polimorphicAdd("hello", "world"));
// console.log(polimorphicAdd("hello", 20)); // errro

// to operate unlimited parameters
function showNames(...names: string[]) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
showNames("Ryan");
showNames("Juan", "Pedro", "Maria");

// a rest parameter can only be the final param in a function
function addMultiples(arg1: string, ...args: string[]): string;
function addMultiples(arg1: number, ...args: number[]): number;
function addMultiples(arg1: any, ...args: any[]): any {
  var total = arg1;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(10);
console.log(addMultiples(1, 2, 3, 4, 5));
console.log(addMultiples(10, 20, 30, 40, 50));
console.log(addMultiples("jesus", "roberto", "juan", "pedro"));

// ademas podemos crear un arreglo que represente nuestra lista indeterminada de parametros

function sumaCuantosQuieras(arg1: any) {
  var args = [];
  for (var _i = 0; _i < arguments.length - 1; _i++) {
    args[_i] = arguments[_i + 1];
  }

  var total = arg1;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}
