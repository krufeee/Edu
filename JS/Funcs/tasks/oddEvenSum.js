function oddEvenSum(num) {
    let oddSum = 0
    let evenSum = 0
    let collection = [...String(num)]

    // for (let index = 0; index < collection.length; index++) {
    //     if (Numbercollection[index] % 2 === 0) {
    //         let currentNumber = Number(collection[index])
    //         evenSum += currentNumber
    //     }

    //     else {
    //         let currentNumber = Number(collection[index])
    //         oddSum += currentNumber
    //     }

    collection.forEach(num => {
        num = Number(num)

        if (num % 2 === 0) {
            evenSum += num
        }
        else {
            oddSum += num
        }

    });


let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
return result
}

console.log(
    oddEvenSum(3495892137259234)
)