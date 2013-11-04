
// http://www.youtube.com/watch?v=xDW9bK-9pNY


var contents = ['a','b','c','d']

for (var i = 0; i < contents.length; i++) {
	var content = contents[i];

	setTimeout(function() {
		console.log(content);
	}, 60);
}

/* above prints 
d
d
d
d
*/

//lets fix it

for (var i = 0; i < contents.length; i++) {
	var content = contents[i];

	var sync = function(content) {
		setTimeout(function() {
			console.log(content);
		}, 60);
	}
	sync(content) // since we have registed a function with the current value we get the expected result
}

/// or use ES5 capabilities (blocking)

contents.forEach(function(content){
	setTimeout(function() {
		console.log(content);
	}, 60);
})

//or

for (var i = 0; i < contents.length; i++) {
	var content = contents[i];

	(function(content) {
		setTimeout(function() {
			console.log(content);
		}, 60);
	})(content);
}

