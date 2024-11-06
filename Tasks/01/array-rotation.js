//Write a function that receives an array and the number of rotations you have to perform. 
//Note: Depending on the number of rotations, the first element goes to the end.

function solve(array, numberOfRotations) {
    for (i=0; i < numberOfRotations; i++) {
        let shiftedElement = array.shift();
        array.push(shiftedElement)

    }
    console.log(array.join(' '))
}

solve([51, 47, 32, 61, 21], 2)	//32 61 21 51 47
solve([32, 21, 61, 1], 4)	//32 21 61 1
solve([2, 4, 15, 31], 5)	//4 15 31 2