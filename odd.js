// Write function to print the odd numbers from 1 to 99.

// anon function that takes no params
// if number / 2 % > 0 print that #

const odd = () => {
    for (var i = 1; i < 100; i++) {
        if (i % 2 > 0) {
            console.log(i);
        }
    }
}

odd();
