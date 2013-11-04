
// var contents = ['a','b','c','d']


// contents.forEach(function(content, i){
// 	setTimeout(function() {
// 		//console.log(content);
// 		contents[i] = 'new ' + content
// 	}, 60);
// 	console.log(contents);
// })

// /* this outputs
// [ 'a', 'b', 'c', 'd' ] 4times
// expected [ 'new a', 'new b', 'new c', 'new d' ]
// */



// // this is a proper way to do but forEach is "blocking". 
// var contents = ['a','b','c','d']
// var to_read = contents.length

// contents.forEach(function(content, i){
// 	setTimeout(function() {
// 		//console.log(content);
// 		contents[i] = 'new ' + content;
// 		to_read--;

// 		if(to_read == 0) {
// 			console.log("using forEach " + contents);
// 		}
// 	}, 60);
// })

// lets try the same with pure async way "this will fail utterly"

// var contents = ['a','b','c','d']
// var to_read = contents.length
// for (var i = 0; i < contents.length; i++) {
// 	setTimeout(function() {
// 		//console.log(contents);
// 		contents[i] = 'new ' + contents[i];
// 		to_read--;

// 		if(to_read == 0) {
// 			console.log(contents);
// 		}
// 	}, 60);
// }

// fix this 

var contents = ['a','b','c','d']
var to_read = contents.length
for (var i = 0; i < contents.length; i++) {
	var sync = function(content, index) {
		setTimeout(function() {
			//console.log(contents);
			contents[index] = 'new ' + content;
			to_read--;

			if(to_read == 0) {
				console.log("using for "+contents);
			}
		}, 60);
	}

	sync(contents[i], i)

}

// scope checking , it has changed the global scope

setTimeout(function() {
	console.log("using for "+contents);
}, 400);