/***** Write a function that sums up integers from a text file, one int per line. *******/

var sum = function(str) {
  var newArr = str.split("\n").map(function(item) {
    return parseInt(item, 10);
  });
  var total = 0;
  for (var i = 0; i < newArr.length; i++) {
    total += newArr[i];
  }
  console.log(total);
};

var numbers = "1\n2\n4\n98\n0\n7896";

sum(numbers);
