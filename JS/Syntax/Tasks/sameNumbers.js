function sameNums(num) {
    let same = true
    let numAsArray = String(num).split('')
    let firstNum = Number(numAsArray[0])
    let sumResult = firstNum
    for (let index = 1; index < numAsArray.length; index++) {
        let currNum = Number(numAsArray[index]);
        sumResult += currNum
        if (firstNum !== currNum) {
            same = false 
        }
    }
    console.log(same)
    console.log(sumResult)    
}