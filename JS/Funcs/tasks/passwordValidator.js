function passValid(pass) {

    let isValid = true
    function numsCount(str) {
        let result = str.match(/\d/g)
        if (!result) {
            return 0
        }
        return result.length
    }

    function isAlphaNumeric(str) {
        var code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    }

    if (pass.length <= 6 || pass.length >= 10) {
        console.log('Password must be between 6 and 10 characters')
        isValid = false
    }

    if (!isAlphaNumeric(pass)) {
        console.log('Password must consist only of letters and digits')
        isValid = false
    }

    if (numsCount(pass) < 2) {
        console.log('Password must have at least 2 digits')
        isValid = false
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passValid('MyPass')