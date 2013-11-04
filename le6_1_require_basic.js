
// this gets evaluated when required
console.log("evaluating example.js");

var message = "hi from local"
this.message = "hi from this"
exports.message = "hi from exports"; // this gets picked

// with out exports
this.message2 = "hi message2 from this" 

exports.say = function () {
  console.log(this.message);
}


// some function
var Invisible = function () {
  console.log("invisible function");
}

Invisible.prototype = {
	testVisibility : function() {
		return "not any more";
	}
}


// lets make it visible
exports.invisible = Invisible