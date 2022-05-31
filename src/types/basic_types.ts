// STRONG/STATIC TYPING - Syntactic sugar
// The language allows to declare optinal static type notation
// syntactic sugar or type annotations

var aCounter; // unkwnow (any) type
var bCounter = 0; // number(inferred)
var cCounter: number; //number
var dCounter: number = 0; //number

// Primtiive types are the most basic types
const myName: string = "Aaron"; // strings
const height: number = 1.78; // numbers: floting point numbers
let isDone: boolean = true; // boolean
let lastExam: null = null;
let lastNote: undefined = undefined;
let someValue;

// Arrays of types
const listOfNotes: number[] = [7, 10, 4];
const listOfNotes2: Array<number> = [12, 12, 12];

const listOfStrings: string[] = ["hello", "how are you"];
const listOfStrings2: Array<string> = ["hola", "que tal"];

const listOfBooleans: boolean[] = [true, false, true];
const listOfBooleans2: Array<boolean> = [true, false, true];

// Arrays of anys
const someValuesArray = [];

// Tuples
let strNumTuple: [string, number];
strNumTuple = ["Hello", 1000];
// strNumTuple = ["Hello", 2000, 3, 4]; // error'


// Any
// all types in ts are subtypes of 'Any Type'
// types that are automatically detected is know as
// 'type inference', and when it cannot detect the type
// is any
let anyData: any = 1;
anyData = true;
anyData = "maybe a string instead";

let listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;

//Void: absence of any type
let myVoidData: void;
let myNullData: null = null;
let myUndefinedData: undefined = undefined;

// Union Types
let id: number | string;
id = 10;
id = "11";
console.log(id);

// Enums
enum Keys {
  Up,
  Down,
  Left,
  Right
}

console.log(Keys)
console.log(Keys.Down)
console.log(Keys[0])

// Objects

type Task = {
  id: string | number
  title: string
  completed: boolean
}

// Objects
const task: Task = {
  id: 1,
  title: "My Title",
  completed: true
}

// Type Assertion

const total: any = 100.1;
let newTotal: string = total as string;
newTotal = false;