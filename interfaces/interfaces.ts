// if a type annotation becomes to complex
// you can create an interface to represent
// the type to simplify annotations
// also is reusable
// are not limite to objets
// they can describe any structure

interface IPerson {
    name: string;
    heighInCentimeters: number;
}
var myperson:IPerson = {
    name:'Mark',
    heighInCentimeters: 181
}

interface IPoint {
    x: number,
    y: number
}

interface ICompare {
    compare(p2: IPoint):number;
}


// las interfaces se pueden heredar a traves de la clausula "extends"

interface ISumador {
    sumar(arg1:number, ...args:number[]):number;
}

interface ISubstrator {
    restar(arg1:number, ...args:number[]):number;
}

/*
interface ICalculador extends ISumador, ISubstrator{
    multiplicar(arg1:number, ...args:number[]):number;
    dividir(arg1:number, arg2:number):number;
}
*/
// luego podemos usarla en una funcion
function ejecutaCalculos(calculadora:ICalculador, num1, num2) {
    calculadora.sumar(num1,num2);
    calculadora.restar(num1,num2);
    calculadora.multiplicar(num1,num2);
    calculadora.dividir(num1,num2);
    return true;
}


// ademas del codigo anterior, estos pueden estar separados

interface ICalculador extends ISumador {
    multiplicar(arg1:number, ...args:number[]):number;
}

interface ICalculador extends ISubstrator {
    dividir(arg1:number, ...args:number[]):number;
}

// tambien se puede crear una interface en el proceso de 
// declaracion mismo

function addPoints(p1:IPoint, p2:IPoint):IPoint {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x:x, y:y}
}

//Valido
var newPoint = addPoints({x:3,y:4},{x:5,y:1});
// Error
//var newPoint = addPoints({x:1},{x:5,y:1});

interface ITodo {
    titulo:string;
    texto:string
} 

function hacerTarea(todo:ITodo){
    console.log(todo.titulo + " " + todo.texto);
}

