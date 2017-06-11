
// interfaces have the ability to inherit 
// from another interfaces
// trougth 'extends' clause 
interface IAdder {
    add(arg1: number, ...args:number[]):number;
}

interface ISubtractor {
    subtract(arg1: number, ...args:number[]):number;
}

interface ICalculator extends IAdder, ISubtractor {
    multiply(arg1:number, ...args:number[]):number;
    divide(arg1:number, ...args:number[]):number;
}

// this is equivalent to the previous example
interface ICalculator extends IAdder {
    multiply(arg1: number, ...args:number[]):number;
}

interface ICalculator extends ISubtractor {
    divide(arg1: number, ...args:number[]):number;
}

// implementation
function performCalculations(calculator:ICalculator, num1, num2){
    calculator.add(num1, num2);
    calculator.subtract(num1, num2);
    calculator.multiply(num1, num2);
    calculator.divide(num1, num2);
    return true;
}

