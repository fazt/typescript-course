let digit: string | number;
let code: string | number | boolean;

digit = "seven";
digit = 7;

console.log(digit);

let path: string[] | string;
path = "/temp/log.xml";
path = ["/temp/log.xml", "/temp/errors.xml"];
// path = 1; // Error

let fruit: "🥝" | "🍌" | "🍎" = "🍌";
console.log(fruit);

fruit = "🍎";
