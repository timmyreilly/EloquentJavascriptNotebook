var foo = 'foo';

var square = function(x){
  return x * x;
};

console.log(square(4));

var makeNoise = function() {
  console.log("PLING");
}

makeNoise();

var power = function(base, exponent){
  var result = 1;
  for (var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

console.log(power(2,10));

var x = "outside";

var f1 = function(){
  var x = "inside f1";
};

f1();
console.log(x);

var f2 = function(){
  x = "inside f2";
};
f2();
console.log(x);

var landscape = function(){
  var result ="";
  var flat = function(size){
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size){
    result += "/";
    for (var count = 0; count < size; count++)
      result +="'";
    result += "\\";
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());

// function chicken(){
//   return egg();
// }
// function egg(){
//   return chicken();
// }
// console.log(chicken() + " came first");


function powered(base, exponent) {
  if (exponent == undefined){
    exponent = 2;
  }
  var result = 1;
  for (var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

console.log(powered(8));
console.log(powered(4,3));

function powered(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(powered(4));
// → 16
console.log(powered(4, 3));
// → 64

function wrapValue(n){
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor){
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

function pow(base, exponent){
  if(exponent==0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(pow(2, 3));

function findSolution(target){
  function find(start, history){
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else 
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "("+history+" * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));

var arr = []

for(count = 0; count < 10; count++){
  console.log("Count: ", count);
  x = findSolution(count);
  console.log(x)
  if(x == null){
    console.log("NULL: ", count)
    arr.push(count);
  }
}

console.log(arr);

function printFarmInventory(cows, chickens){
  var cowString = String(cows);
  while (cowString.length < 3){
    cowString = "0" + cowString;
  }
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

// Let's do it better

function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);
}

function printsFarmInventory(cows, chickens, pigs){
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printsFarmInventory(7, 11, 133)


// Let's pick out a single concept

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function prinFarmInventory(cows, chickens, pigs){
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

prinFarmInventory(7, 16, 3);


var f = function(a) {
  console.log(a + 2);
};

f(5);

function g(a, b) {
  return a * b * 3.5;
}

console.log(g(4, 1))

function min(a, b){
  if(a <= b){
    return a;
  }else{
    return b;
  }
};

console.log(min(6,2));

//zero is even
// one is odd
// For any other number N, its evennes is the same as n-2

function isEven(number){
  if(number == 0){
    return 'even';
  }else if(number == 1){
    return 'odd'
  }else if(number < 0){
    return isEven(-number)
  }else{
    return isEven(number-2);
  }
}

for(var i = -10; i < 10; i++){
  console.log(i, isEven(i));
}

isEven(-1)

function countBs(word){
  var bs = 0;
  for(var j = 0; j < word.length -1; j++){
    if(word.charAt(j) == "B"){
      bs++;
    }
  }
  return bs;
}

console.log(countBs("BumBleBee"));

function countChar(word, char){
  var chars = 0;
  for (var j = 0; j < word.length -1 ; j++){
    if (word.charAt(j) == char){
      chars++;
    }
  }
  return chars;
}

console.log(countChar("HOLY GUACAMOLE Hey THat's Hot", "H"));


