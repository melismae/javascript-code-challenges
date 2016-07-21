/**** REVERSE WORDS IN A STRING ****/
// Write a program to reverse a string

var strRev = function(str) {
  // parse string into array
  var arr = str.split(" ");
  var newArr = [];
  for (var i = arr.length; i--;) {
    newArr.push(arr[i]);
  }
  var newStr = newArr.join(' ');
  console.log(newStr);
}

strRev("The Trumps to Speak tonight");
