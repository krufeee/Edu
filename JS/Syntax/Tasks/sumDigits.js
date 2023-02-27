function sumDigits(num) {
    let numAsArray = String(num).split('')
    let result = 0
    for (let index = 0; index < numAsArray.length; index++) {
        let currentDigit = numAsArray[index]
        result += Number(currentDigit)    
    }
    console.log(result)
}