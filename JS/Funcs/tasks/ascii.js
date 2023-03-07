function ascii(firstLetter, secondLetter) {
    let chars = []

    if (firstLetter.charCodeAt(0) > secondLetter.charCodeAt(0)) {
        for (let index = firstLetter.charCodeAt(0) - 1; index > secondLetter.charCodeAt(0); index--) {
            chars.push(String.fromCharCode(index))

        }
        var result = chars.reverse()
        result = result.join(' ')
    }

    else {

        for (let index = firstLetter.charCodeAt(0) + 1; index < secondLetter.charCodeAt(0); index++) {
            chars.push(String.fromCharCode(index))

        }
        var result = chars.join(' ')

    }
    console.log(result)
}

    ascii('C',
    '#')