//The input will be a single string.
//Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
//Finally, print out all the special words you found without the label (#) on a new line




function solve( text ) {
    function isOnlyLetters(word) {
    return /^[a-zA-Z]+$/.test(word);
    }
    text = text.split(' ')
    for( let word of text) {
        if ( word.startsWith('#') && word.length > 1 && isOnlyLetters(word.slice(1))) {
            console.log(word.slice(1, word.length + 1))
        }
    }
}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia')	// special '\'socialMedia
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')	// variously'\'regions'\'number