function hashTag(sentence) {
    let mySentence = sentence.split(' ')

    function isAlphaNumeric(str) {
        var code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    }

    for (let index = 0; index < mySentence.length; index++) {
        let currentWord = mySentence[index];

        if (currentWord.startsWith('#') && currentWord.length > 1) {
            let myword = currentWord.slice(1)

            if (isAlphaNumeric(myword)) {
                console.log(currentWord.slice(1))
            }
        }
    }
}

hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')