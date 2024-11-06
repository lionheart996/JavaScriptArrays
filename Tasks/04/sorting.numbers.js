// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.

// function solve(array) {
//     let newArr = []
//     array
//         .sort((a,b) => a - b)
//         .forEach(function(number, index) {
//             if (index % 2 === 0) {
//                 newArr.unshift(array.shift());
//             } else {
//                 newArr.push(array.pop());
//             }
//         });
//     return newArr;  
// }

function solve(input) {
    const zippedArray = []
    const initialArrayLength = input.length;

    input.sort(function(a,b) {
        return a - b;
    });

    for (let i=0; i < initialArrayLength; i++) {
        if (i % 2 == 0) {
            const el = input.shift();
            zippedArray.push(el);
        } else {
            const el = input.pop();
            zippedArray.push(el);
        }
    }
    return zippedArray;

}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])) // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]