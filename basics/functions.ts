function greets(name:string):string {
    return `Hello + ${name}`;
}

greets('world');

function myVoid():void{
    return;
}

// function annotation with parameter
// type annotation and return type annotation
var sayHello:(name:string) => string;
// implementation
sayHello = (name:string) => {
    return 'Hello' + name;
}

// type of parameters
function add(x:number, y:number):number {
    return x + y;
}

//optional parameter
// when is not parameter, ts assign null value to it
function addThree(x:number, y:number, z?:number):number {
    if (z !== undefined) {
        return x + y + z;
    }
    return x + y + z;
}

function greetMe(name: string, greeting?: string): string {
  if(!greeting) {
    greeting = hello;
  }
  return greeting + ', ' + name;
}

// default parameter
function greetMeRefactored(name: string, greetig?: string = 'Hello'):string {
  return greeting + ', ' + name;
}

// overloads
// we can use the add strings and numbers

function polimorphicAdd(x:string, y:string):string;
function polimorphicAdd(x:number, y:number):number;
function polimorphicAdd(x: any, y:any): any {
    return x + y;
}

// to operate unlimited parameters
// a rest parameter can only be the final param in a function
function sumarMuchosParametros(arg1:string, ...args: string[]):string;
function sumarMuchosParametros(arg1:number, ...args: number[]):number;
function sumarMuchosParametros(arg1:any, ...args:any[]):any {
    var total = arg1;
    for(var i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

// ademas podemos crear un arreglo que represente nuestra lista indeterminada de parametros

function sumaCuantosQuieras(arg1) {
  var args = [];
  for (var _i = 0; _i < arguments.length - 1; _i++ ){
      args[_i] = arguments[_i + 1];
  }

  var total = arg1;
  for(var i = 0; i < args.length; i++) {
      total += args[i];
  }

  return total;
}
