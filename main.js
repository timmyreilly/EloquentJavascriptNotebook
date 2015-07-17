var foo = 'foo';

var listOfNumber = [2, 3, 5, 7, 11];

console.log(listOfNumber[1]);

var doh = "Doh";
console.log(typeof doh.toUpperCase);
// -> function

console.log(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);
console.log(mack.join('  woot '));

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var anObject = {left: 1, right: 2};
console.log(anObject.left);

delete anObject.left;

console.log(anObject.left);

console.log("left" in anObject);

console.log("right" in anObject);