var x: any = { /**/ };

if(typeof x === 'string') {
    // now ts assume x is a string, this feature is know as
    // type guard
    //console.log(x.splice(3, 1)); // splice doesn' exist on a string
    console.log(x.length);
}
//x is still any
x.foo(); //ok

