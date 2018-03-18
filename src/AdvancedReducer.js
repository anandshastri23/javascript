var fs = require("fs");

var input = fs.readFileSync('src/SampleTsvFile.txt', 'utf8').replace(/\r/g, "").split("\n")
    .map((line) => {
        return line.split("\t")
    });


var output = input.reduce((tempItems, item) => {
    tempItems[item[0]] = [];
    tempItems[item[0]].push(
        {name: item[0]},
        {age: item[1]},
        {address: item[2]});
    return tempItems;
}, {});

console.log(JSON.stringify(output,null,2));
