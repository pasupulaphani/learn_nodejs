

// some function
var Invisible = exports.Invisible = function () {
  console.log("invisible function");
}

Invisible.prototype = {
	testVisibility : function() {
		return "not any more";
	}
}

// good way for an utils module
module.exports = exports;

