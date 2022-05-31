// union types, stores values of two or more types
let mypath: string[] | string;
mypath = ["/temp/logs.xml", "/temp/errors.xml"];
mypath = "/temp/log.xml";
//path = 1; //error

console.log(mypath)
