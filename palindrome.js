/***** Figure out whether a word is a palindrome ******/

var palindrome = function(str) {
  // get string length
  var len = str.length;
  var yes;

  // TODO
  // check for even or odd using modulo
  // last plus one
  // do first[0] and last[length-1] match dep on even or odd
  //if no return

  var isEven = false,
      isOdd = false;
  if (len % 2 === 0) {
    isEven = true;
  } else {
    isOdd = true;
  }

  if (len < 3) {
    yes = false;
  } else if (isEven) {
    // if the word is 6 characters
    // I only need to compare the sixth & first, fifth & second, third & fourth
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len-(i+1)]) {
        yes = false;
      } else {
        yes = true;
      }
    }
  } else {
    for (var a = 0; a < (len-1)/2; a++){
      if (str[a] !== str[len-(a+1)]) {
        yes = false;
      } else {
        yes = true;
      }
    }
  }

  if (!yes) {
    console.log("not a palindrome. try again");
  } else {
    console.log("yea! you're good at finding palindromes");
  }
};

// this should return no
palindrome("rekiver");

// this should return yes
palindrome("reviver");

// this should return no
palindrome("rehger");

// this should return yes
palindrome("redder");

// this should return no
palindrome("oo");
