var basic_require = require('./le6_1_require_basic.js');

// this will trwo error
//console.log(message); 

console.log(this.message); // undefined ofcourse

console.log(basic_require.message); // will be "hi from exports"

console.log(basic_require.message2); // this gets picked as well

console.log(basic_require);
basic_require.say()

basic_require.message = "override message"
console.log(basic_require);

basic_require.say()

var invi = new basic_require.invisible()
console.log(invi.testVisibility());