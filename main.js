var x = 'foo';

console.log(x);

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105


var one = 1, two = 2;
console.log(one + two);

//alert("good morning");

var x = 30;
console.log("the value of x is", x);
// -> The value of x is 30

console.log(Math.max(2, 4));
// -> 4

console.log(Math.min(2,4) + 100);
// -> 102

//confirm("Shall we, then?");
//prompt("Tell me everything you know.", "...");

// var theNumber = Number(prompt("Pick a number", ""));
// alert("Your number is the square root of " +
//       theNumber * theNumber);
// 	  
// var theNumber = Number(prompt("Pick a number", ""));
// if (!isNaN(theNumber))
//   alert("Your number is the square root of " +
//         theNumber * theNumber);
// 
// var theNumber = Number(prompt("Pick a number", ""));
// if (!isNaN(theNumber))
//   alert("Your number is the square root of " +
//         theNumber * theNumber);
// else
//   alert("Hey. Why didn't you give me a number?");
// var num = Number(prompt("Pick a number", "0"));
// 
// if (num < 10)
//   alert("Small");
// else if (num < 100)
//   alert("Medium");
// else
//   alert("Large");

var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

// do {
//   var name = prompt("Who are you?");
// } while (!name);
// console.log(name);

for (var number = 0; number <= 12; number = number + 2)
  console.log(number);
  
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result);
// → 1024

for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);
// → 21

var primes = [];

for (var current = 2; current < 1000 ; current++) {
  console.log("current", current);
  for (var value = 2; ; value++){
    //console.log("value", value);
    if (current % value == 0)
      break;
  }
  if (current === value){
    console.log("PRIME!", current, value);
    primes.push(current);
  }else{
    console.log("Not Prime", current, value);
  }
}

console.log(primes);