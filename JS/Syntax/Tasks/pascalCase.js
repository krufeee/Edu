function pascalCase(text2) {
    
    // let text = text2.trim()
    let text = text2.replace(/\s/g, '')
    let myWords = []
    let myWord = ''
    for (let index = 0; index < text.length; index++) {
        if (index == 0 && text[index] == text[index].toUpperCase()) {
            myWord += text[index]
        }

        else {
            if (text[index] == text[index].toUpperCase()) {
                myWords.push(myWord)
                myWord = text[index]
            }
            else {
                if (index != 0 && myWord) {
                    myWord += text[index]
                    if (index == text.length - 1)
                        myWords.push(myWord)
                }
            }
        }
    }

    console.log(myWords.join(', '))
}


pascalCase('    SplitMeIfYouCanHaHaY   ouCantOrYouCan')