// find largest int in array of ints
var myArr = [1,2,5,9,13];

function arrFunc(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  console.log(num);
}

arrFunc(myArr);
