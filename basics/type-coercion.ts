var oneNumber = 1;
var oneString = "1";

// var theSame = oneNumber == oneString; //invalid
var theSame = oneNumber.toString() == oneString; //valid

var thisIsAString = 1 + "1"; //11
var thisIsANumber = 1 + parseInt("1", 10);//2

