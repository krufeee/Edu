function sum(firstNum, secondNum) {
    let nums = []
    let sums = 0
    for (let index = firstNum; index <= secondNum; index++) {
        nums.push(index) 
        sums = sums + index
    }
    let numString = nums.join(' ')
    console.log(numString)
    console.log(`Sum: ${sums}`)
}

sum(5, 10)
sum(0, 26)