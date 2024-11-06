//The input will be given as two separated strings (a word as a first parameter and a text as a second).
//Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
//If you don't find the word print: "{word} not found!"

function solve(searchedWord, text) {
    text = text.toLowerCase().split(' ');
    searchedWord = searchedWord.toLowerCase();
    let found = false;

    for (let word of text) {
        if (word === searchedWord) {
            console.log(word);
            found = true;
            break; // Stop the loop once we find the word
        }
    }

    if (!found) {
        console.log(`${searchedWord} not found!`);
    }
}


solve('javascript','JavaScript is the best programming language')	// javascript
solve('python','JavaScript is the best programming language') //	python not found!