//This will alow us to use that function from 
// that greet.js fil, and we can use it right here
const greet = require('./greet');
// const person1 = require('./people');
const {person1,person2, person3} = require('./people')

console.log(person1);
console.log(person2);
console.log(person3);
greet('juyeon')
greet(person1)
greet(person2)
greet(person3)