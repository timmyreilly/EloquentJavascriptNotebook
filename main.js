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

for(count = 0; count < 10000; count++){
  console.log("Count: ", count);
  x = findSolution(count);
  console.log(x)
  if(x == null){
    console.log("NULL: ", count)
    arr.push(count);
  }
}

console.log(arr);

