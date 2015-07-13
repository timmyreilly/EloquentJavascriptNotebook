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

