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


var journal = [
  {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
  {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false}, 
  {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},
];

console.log(journal);

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

var journal = [];

function addEntry(events, didITurnIntoASquirrel){
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);


var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function phi(table){
  return (table[3] * table[0] - table[2] * table[1]) / 
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry){
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal){
  var table = [0,0,0,0];
  for (var i = 0; i < journal.length; i++){
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));

var map = {};
function storePhi(event, phi){
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);


for (var event in map)
  console.log("The correlation for '" + event + "'is " + map[event]);
  
function gatherCorrelations(journal){
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++){
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++){
      var event = events[i];
      if(!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza)

for (var event in correlations)
  console.log(event + ": " + correlations[event]);

console.log("\n\n")  
  
for (var event in correlations){
  var correlation = correlations[event];
  if(correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}

for (var i = 0; i < JOURNAL.length; i++){
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

var todoList = [];
function rememberTo(task){
  todoList.push(task)
}
function whatIsNext(){
  return todoList.shift();
}
function urgentlyRememberTo(task){
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
// 1
console.log([1,2,3,2,1].lastIndexOf(2));
// 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]

console.log([0,1,2,3,4].slice(2));
// [2, 3, 4]

function remove(array, index){
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "d"], 2));

var myString = "Fido";
myString.myProperty = "value"
console.log(myString.myProperty);
// undefined

console.log("coconuts".slice(4, 7));
// nut
console.log("coconut".indexOf("u"));
// 5
console.log("coconut".indexOf("o"));
// 1

console.log("one two three".indexOf("ee"));
// 11

console.log("   okay \n".trim());
// okay

var string = "abc";
console.log(string.length);
// 3
console.log(string.charAt(0));
// a
console.log(string[1]);
// b

function noArguments(){}
noArguments(1, 2, 3);
function threeArguments(a,b,c){}
threeArguments();

function argumentCounter(){
  console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem");
// you game me 3 arguments

function addEnty(squirrel){
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++){
    entry.events.push(arguments[i]);
  }
  journal.push(entry);
}
addEnty(true, "work", "touched tree", "pizza", "running", "television");

function randomPointOnCircle(radius){
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));

console.log(Math.random());

console.log(Math.random());

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

console.log(Math.ceil(Math.random() * 10));

var myVar = 10; 


console.log("\n Exercises \n");

// NEED to be loaded in browser. 
//console.log("myVar" in window);

//console.log(window.myVar);

function range(start, end){
  var a = []
  var stepCount = 1;
  if (arguments.length >= 2){
    stepCount = arguments[2];
  }

  if (start > end){
    stepCount = -1
    if(arguments.length >= 2){
      stepCount = arguments[2];
    }
    for (var count = start; count > end-1; count = count + stepCount){
      a.push(count);
    }
  }
  
  for( var count = start; count < end+1; count = count + stepCount){
    a.push(count);
  }
  return a
}

console.log(range(1, 10));

console.log(range(1, 10, 2));

console.log(range(5, 2, -2));

function sum(numbers){
  var s = 0;
  for (var n in numbers){
    s += numbers[n];
  }
  return s;
}

console.log(sum(range(1, 10)));

console.log(sum(range(5, 20)));

console.log(range(30, 5, -4));

console.log(sum(range(30, 5, -4)));

console.log("\n Reversing array \n");

function reverse(arr){
  var a = []
  for (n in arr){
    a.unshift(arr[n]);
  }
  return a;
}

var sampleArr = ['a', 'b', 'c', 'd', 'e'];

console.log(reverse(sampleArr));

function reverseArrInPlace(arr){
  // for(n in arr){
  //   arr.unshift(arr.pop());
  // }
  // for ( var count = 0; count < arr.length/2; count++){
  //   arr.unshift(arr.pop());
  // }
  var hold = 0
  for (var count = 0; count <= arr.length/2; count++){
//    console.log("arr[count]: ", arr[count], " arr[arr.length-1-count] ", arr[arr.length-1-count] );
    hold = arr[count]
    arr[count] = arr[arr.length-1-count];
    arr[arr.length-1-count] = hold;
  }
  
  return arr;
}

function reverseArrayInPlace(arr){
  var hold = 0;
  for (var count = 0; count <= arr.length/2; count++){
    hold = arr[count];
    arr[count] = arr[arr.length-1-count];
    arr[arr.length-1-count] = hold;
  } 
  return arr;
}

console.log(reverseArrayInPlace(sampleArr));


console.log(sampleArr.length);

console.log(sampleArr[sampleArr.length-1]);

console.log("\n A LIST \n");

function arrayToList(arr){
  var list = {};
  for (var count = arr.length - 1; count >= 0; count--){
    //console.log(arr.length);
    console.log('count: ', count, ' arr[count]: ', arr[count]);
 
    // if(count == arr.length){
    //   console.log('here');
    //   console.log(arr.length);
    //   console.log(count);
    //   console.log(arr[count]);
    //   list = {value: arr[count], rest: null};
    // }else{
    //   list = {value: arr[count], rest: list};    
    // }
    
    list = {value: arr[count], rest: list};
    console.log(list);
  }
  return list;
}

var sarr = ['a', 'b', 'c'];


var l = arrayToList(sarr);

console.log(l);

console.log('value' in l);

function listToArray(list){
  var arr = [];
  var l = list;
  while(l.rest != null){
    console.log(l.value)
    arr.push(l.value);
    l = l.rest;
  }
  return arr;
}

a = listToArray(l);

console.log(listToArray(l));

function prepend(arr, list){
  return {value: arrayToList(arr), rest: list}
}

var sarrr = ['a', 'b'];

var larrr = arrayToList(sarrr);

var newr = prepend(['a'], larrr);

console.log(newr);

console.log("\n NTH \n");

function nth(num, list){
  console.log('LIST:  ', list);
  if(num == 0){
    console.log('list.value: ',list.value);
    return list.value;
  }else if(list.rest == null){
    return undefined;
  }else{
    //console.log("recursing: num: ", num, "list: ", list);  
    return nth(num-1, list.rest);
  }
}

console.log(newr);

console.log('this is at the 2 position: ', nth(2, newr));

console.log('this is at the 1 position: ', nth(1, newr));

console.log('this is at the 0 position: ', nth(0, newr));


// for (var i = 1; i <= 3; i++){
//   console.log(nth(i, newr));
// }

console.log('\n DeepEqual \n');


function deepEqual(a, b){
  if (typeof(a) == obj && typeof(b) == obj){
    console.log("EYPYEP")
    return true;
  }
  if (typeof(a) === typeof(b)){
    
  }
}


var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object:2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
