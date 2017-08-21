// STRONG/STATIC TYPING - Syntactic sugar
// The language allows to declare optinal static type notation
// syntactic sugar or type annotations

var aCounter; // unkwnow (any) type
var bCounter = 0; // number(inferred)
var cCounter:number; //number
var dCounter:number = 0; //number

// when a type is detected automatically
// the process is calle type inference
// the ts primitive types are:
    // numbers, booleans, string, void, null, undefined

// - Number: all numbers are floiting point numbers
var height: number = 6;

// - strings
var myName: string = "Aaron";
myName = 'Isaac';

// - Boolean
var isDone:boolean = true;
isDone= true;

// Arrays of types
var listOfNumbers:number[] = [1,2,3];
var listOfNumbers:Array<number> = [12,12,12];

var listOfStrings:string[] = ["hello", "how are you"];
var listOfNumbers2:Array<string> = ["hola", "que tal"];

var listOfBooleans:boolean[] = [true, false, true];

// tuples
var strNumTuple: [string, number];
strNumTuple = ['Hello', 1000];
strNumTuple = ['Hello', 2000, 3, 4];

// Enum
// gives more friendly Names to numeric Values
enum Color {Red, Green, Blue};
var c:Color = Color.Red; //0

// enums work by naming numeric values
enum Role {Employee, Manager, Admin}
var role:Role = Role.Employee; // 0

// by default is 0, but you can tweak either the start
// and also you can set individual values
enum Permissions {Root = 4, Invited}
var fazt = Permissions.Root; // 4
var jesus = Permissions[5]; // Invited

// Any
// all types in ts are subtypes of 'Any Type'
// types that are automatically detected is know as
// 'type inference', and when it cannot detect the type
// is any
var anyData:any = 1;
anyData = true;
anyData = "maybe a string instead";

var listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;


//Void: absence of any type

var myVoidData:void = null;
var myNullData:null = null;
var myUndefinedData:undefined = null;
var myUndefinedData:undefined = undefined;
