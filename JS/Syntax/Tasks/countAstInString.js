function count(word, text) {
    let myWords = word.split(', ')
    let result = text

    for (let index = 0; index < myWords.length; index++) {
        let currentWord = myWords[index];
        let startIndex = text.indexOf("*".repeat(currentWord.length));
        if (startIndex) {
           result = result.replace("*".repeat(currentWord.length), currentWord)
        }
        
    }
    console.log(result)
}




count('great',
'softuni is ***** place for learning new programming languages')