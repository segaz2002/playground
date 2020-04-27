// Write a program that adds two numbers together
//  DRY
// every name must start with a letter or _
// a variable cannot start with a number or a special chatacter


// var a = 4;
// var b = 1;
// var sum = a + b;

// function names must be camcelCased
function sumFunc(n1, n2) {
  return (n1 + n2);
}
console.log(sumFunc(9, 4));


//We are designing a simple program for elementary pupils 
// that helps them to identify even or odd numbers

// a number that is dividible by two(2) without a remainder is even

// Begin
// accept the number
// ****
// devide the number by 2 and get remainder 
// check if there is remainder after devision 
// if there is a remainder it is Odd
// else print out "Number is Even"
// End



//Check if the input parameter is a number
// if not print out ("Warning, all inputs must be numbers");

function evenAndOddChecker(someNumber) {
  var remainder = someNumber % 2;
  if (remainder != 0) {
    console.log("Number " + someNumber + " is Odd");
  } else {
    console.log("Number " + someNumber + " is Even");
  }
}


evenAndOddChecker("xcxcbc");