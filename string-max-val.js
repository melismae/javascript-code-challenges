/******* Find the maximum value in a list ********/

var minVal = function(num) {
  //convert string to arr
  // convert arr vals to nums
  var arr = num.split(", ").map(function(i) {
    return parseFloat(i);
  });

  // assign evaluator to first[0]
  var largest = arr[0];
  //loop through to assess whether the next number is larger
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
};

minVal("76, 890, 936759, 3988, 3, 9269874 287");
