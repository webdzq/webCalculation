var fs = require('fs');

var container = [];

function readLines(input, func) {
    var remaining = '';

    input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            func(line);
            index = remaining.indexOf('\n');
        }

    });

    input.on('end', function() {
        if (remaining.length > 0) {
            func(remaining);
        }
    });

}

function func(data) {

    container.push(data);


}

var input = fs.createReadStream('../listTestData.txt');
readLines(input, func);
//nodejs读写大文件：https://cnodejs.org/topic/55a73038f73c01466cf931f2
