    var numeric = [
        ['input','input'],
        ['input','input']
    ];
    var obj = {
        'row1' : {
            'key1' : 'input1',
            'key2' : 'inpu2'
        },
        'row2' : {
            'key3' : 'input3',
            'key4' : 'input4'
        }
    };
    var mixed = {
        'row1' : ['input1', 'inpu2'],
        'row2' : ['input3', 'input4']
    };

console.log(numeric);
console.log(obj['row1']);
console.log(mixed);
 
var n = {}
n[0]= 4;
n[0][1]= 4;
console.log(n);