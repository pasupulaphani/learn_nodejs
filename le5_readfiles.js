
// we have seen few ways to write async code
// lets putinto practice by doing a small exercise.

// Here we read all files in test folder

var fs = require('fs');

//var filesAndFolders = ['test/a.txt', 'test/b.txt', 'test/inner_folder']
var filesAndFolders = ['test']
var dataArray = []
var to_read = 1

var readFiles = function(path, index, callback) {
	
	fs.stat(path, function(err, stats) {
		if(err) throw err;
		if(stats.isDirectory()) {
			fs.readdir(path, function(err, files) {
				to_read--;
				files.forEach(function(file) {
					to_read++;
					readFiles(path+'/'+file, index, callback);
				})
				
			})
		} else if(stats.isFile()) {
			fs.readFile(path, 'UTF-8', function (err, data) {
				if (err) throw err;
				to_read--;
				dataArray.push(path+":"+data+"\n");
				if(to_read == 0) {
					callback(dataArray);
				}
			});
		}
	})

}

for (var i = 0; i < filesAndFolders.length; i++) {
	readFiles(filesAndFolders[i], i, function(dataArray) {
		console.log("using for "+dataArray);
	});
};



