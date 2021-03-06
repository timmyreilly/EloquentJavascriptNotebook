var foo = 'foo';

var total = 0, count = 1;

while(count <= 10){
  total += count;
  count += 1;
}

console.log(total);


//console.log(sum(range(1, 10)));

var array = [1, 2, 3];

for (var i = 0; i < array.length; i++){
  var current = array[i];
  console.log(current);
}

function logEach(array){
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function forEach(array, action){
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampmeter", "FOMA", "Granfalloon"], console.log);

var numbers = [1, 2, 3, 4, 5], sum = 0;

// forEachTwo(numbers, function(number){
//   sum += number;
// });
// 
// console.log(sum);


function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++){
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++){
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

function gatherCorrelationsBetter(journal){
  var phis = {};
  journal.forEach(function(entry){
    entry.events.forEach(function(event){
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

function greaterThan(n){
  return function(m){
    return m > n;
  };
}

var greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));

function noisy(f){
  return function(arg){
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

noisy(Boolean)(0);

// functions with new types of control flow

function unless(test, then){
  if(!test) then();
}
function repeat(times, body){
  for(var i = 0; i < times; i++)
    body(i);
}

repeat(3, function(n){
  unless(n % 2, function(){
    console.log(n, "is even");
  });
});

function transparentWrapping(f){
  return function(){
    return f.apply(null, arguments);
  };
}

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

var ancestry = JSON.parse(ANCESTRY_FILE);

console.log(ancestry.length);

function filterer(array, test){
  var passed = [];
  for (var i = 0; i < array.length; i++){
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filterer(ancestry, function(person){
  return person.born > 1900 && person.born < 1925;
}));

function map(array, transform){
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person){
  //console.log(person.born);
  return person.died - person.born > 90;
});

console.log('\n overNinety \n', overNinety);

console.log(map(overNinety, function(person){
  return person.name;
}));

//ancestry.filter()


console.log("\n Summarizing with Reduce \n");

function reducer(array, combine, start){
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reducer([1,2,3,4], function(a, b){
  return a + b;
}, 0));

// Working with reduce to find the most ancient known ancestor...

console.log(ancestry.reduce(function(min, cur){
  if (cur.born < min.born) return cur;
  else return min;
}));

console.log("\n Compasability \n");

var min = ancestry[0];

for (var i = 0; i < ancestry.length; i++){
  var cur = ancestry[i];
  if (cur.born < min.born)
    min = cur;
}

console.log(min);

function average(array){
  function plus(a, b) { return a + b;}
  console.log("array.reduce(plus): the sume of ages:  ",array.reduce(plus));
  return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }


console.log('ancestry.filter(male).map(age): \n', ancestry.filter(male).map(age));

console.log('what if we do it backwards?');

console.log('ancestry.map(age).filter(male): \n', ancestry.map(age).filter(male));

console.log('this array is empty because map is only returning an array of numbers')
// console.log(ancestry.map(age));
// 
// console.log(ancestry.filter(male));



console.log(average(ancestry.filter(male).map(age)));

console.log(average(ancestry.filter(female).map(age)));

console.log('\n Great-Great \n');

var byName = {};

ancestry.forEach(function(person){
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person, f, defaultValue){
  function valueFor(person){
    //console.log(person);
    if(person == null){
      return defaultValue;
    }else{
      return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
    }
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather){
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else 
    return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);


function countAncestors(person, test){
  function combine(person, fromMother, fromFather){
    var thisOneCounts = test(person);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person){
  var all = countAncestors(person, function(person){
    return true;
  });
  var longLiving = countAncestors(person, function(person){
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}

console.log(longLivingPercentage(byName["Emile Haverbeke"]));

console.log("\n Binding \n");


var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donal Duck"];

function isInSet(set, person){
  return set.indexOf(person.name) > -1;
}


console.log(ancestry.filter(function(person){
  return isInSet(theSet, person);
}));

console.log("\n Same Result using bind \n");

console.log(ancestry.filter(isInSet.bind(null, theSet)));


console.log("\n EXERCISES \n");

// Flattening: use the reduce method in combination with the concat method to flaten an array of arrays in a singe array that has all the elements of the inpu arrays. 

var arrays = [[1,2,3],[4, 5],[6]];

// [1, 2, 3, 4, 5, 6];

var newArray = forEach(arrays, function(p){
  console.log('p: ',p);
});

// function concat(a,b){
//   console.log("a: ",a, "b: ", b);
//   return a + b;
// }

function poo(a, b){
  return a.concat(b);
}

var array3 = arrays.reduce(poo);

console.log("array3: ", array3);


console.log(forEach(arrays, console.log));

console.log("\n Second Try \n");

var arrs = [[1,2,3],[4,5],[6]];

console.log(arrs);

console.log(arrs.reduce(function(a,b){
  return a.concat(b);
}));

console.log("\n Mother-Child Age Difference \n");

function avg(array){
  function plus(a, b){ return a + b}
  return array.reduce(plus) / array.length;
}


function hasKnownMother(array){
  return array.mother;
}

var bName = {};
ancestry.forEach(function(person){
  bName[person.name] = person;
})

//console.log(bName);

var hasMother = ancestry.filter(hasKnownMother);

console.log(hasMother);

var moms = ancestry.filter(function(p){
  return p.sex = "f";
})

//console.log(moms);

// Write Two function every and some, that behave like these methods, except that they take the array as their first argument rather than being a method. 


function eve(array, f){
  for(var i = 0; i < array.length; i++){
    if (!f(array[i])){
      return false;
    }
  }  
  return true;  
}

function som(array, f){
  for (var i = 0; i < array.length; i++){
    if (f(array[i])){
      return true;
    }
  }
  return false;
}

function so(array, f){
  array.forEach(function(a, f){
    console.log(a, f);
  }, f)
}


console.log(so([NaN, 3, 4], isNaN));

console.log(so([2, 3, 4], isNaN));


console.log('\n Meh Implementation \n');

//console.log(isNaN(NaN));

console.log(eve([NaN, NaN, NaN], isNaN));

console.log(eve([NaN, NaN, 4 ], isNaN));


console.log(som([NaN, 3, 4], isNaN));

console.log(som([2, 3, 4], isNaN));