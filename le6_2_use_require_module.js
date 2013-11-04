
var module_require = require('./le6_2_require_module.js');
console.log(module_require)

var invi = new module_require();

console.log(invi)
console.log(invi.testVisibility())


// Or instantiate directly

var module_require = require('./le6_2_require_module.js')();
console.log(module_require.testVisibility())