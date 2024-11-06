// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function solve(array) {
    array
        .sort((a,b) => a.localeCompare(b))
        .forEach(function(element, index) {
            console.log(`${index + 1}.${element}`);
        })
    
}

solve((["John", "Bob", "Christina", "Ema"]))	// 1.Bob 2.Christina 3.Ema 4.John