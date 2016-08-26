// Compute all prime numbers within a range

// function that takes two params -> min, maximum
// have a max poss value or other restrictions on user input?

// params aren't prescribed as min/max
// if only 1 param, Return
// if either are not  numbers, Return
// if a < b, a is min b is max and vice versa
// if equal use only one
// if either are less than 1 begin at 1

const prime = (a, b) => {
    if (!a || !b) {
        console.log("please enter two values");
        return;
    }
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("please use only numbers");
        return;
    }
    let min = a;
    let max = b;
    if (a === b) {
        max = a;
    } else if (a > b) {
        min = b;
        max = a;
    }
    for (let i = min; i <= max; i++) {
        // hiDiv is the maximum divisible a number can be;
        let hiDiv = Math.floor(i / 2);
        console.log("i", i, "hiDiv", hiDiv);

        for (let k = 2; k <= hiDiv; k++) {
            if (i % k === 0) {
                console.log('k',k);
                console.log(i + "is not prime");
            }
            else {
                console.log("this is prime number i", i);
            }
        }
//        console.log(i);
    }
//    console.log("min", min, "max", max);
}
