// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.

function solve(text) {
    
    // Split text into words that start with capital letters
    const words = text.match(/[A-Z][a-z]*/g);
    if (words) {
        console.log(words.join(', ')); // Join words with commas and print
    } else {
        console.log("No capitalized words found.");
    }
}


solve('SplitMeIfYouCanHaHaYouCantOrYouCan')	// Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
solve('HoldTheDoor')                        // Hold, The, Door
solve('ThisIsSoAnnoyingToDo')	            // This, Is, So, Annoying, To, Do