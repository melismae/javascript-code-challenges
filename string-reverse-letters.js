// reverse a string
var myString = 'this is a string here';

function revString (string) {
  // define a new string var
  var newString = '';

  // loop through the old string
  for (var i = string.length; i--;) {
    newString += string[i];
  }
  console.log(newString);
}

revString(myString);
