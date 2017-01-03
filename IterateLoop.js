//for ([initialization]; [condition]; [final-expression])

/**
The condition statement is evaluated at the beginning of 
every loop iteration and will continue as long as it 
evaluates to true. When condition is false at the start
of the iteration, the loop will stop executing. 
This means if condition starts as false, your loop will 
never execute.
**/


// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(ourArray);

console.log(myArray);
