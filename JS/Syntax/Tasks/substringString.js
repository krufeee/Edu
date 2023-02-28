function findSubstring(word, text) {
    let myWordLower = word.toLowerCase()
    let mytextLower = text.toLowerCase()
    let myArr = mytextLower.split(' ')

    if (myArr.includes(myWordLower)) {       
        return console.log(word)
    }
    console.log(`${word} not found!`)
}


findSubstring('javascript',
'JavaScript is the best programming javascript language')