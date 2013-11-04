

// some function
var Invisible = function () {
  console.log("invisible function");
}

Invisible.prototype = {
	testVisibility : function() {
		return "not any more";
	}
}

// eliminate usage of new in the required file
module.exports = function() {
	return new Invisible;
}

