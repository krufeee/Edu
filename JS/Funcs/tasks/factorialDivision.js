// factoDiv = (a, b) =>
//     a === b ? 1 : Math.max(a, b) * factoDiv(
//         Math.max(a, b) - 1, Math.min(a, b)
//     )

// function fract(a, b) {
//     return (a === b ? 1 : Math.max(a, b) * fract(
//         Math.max(a, b) - 1, Math.min(a, b))).toFixed(2)
// }
// console.log(
//     fract(6, 2)
// )



function factorialDivision(firstNum, secondNum) {
    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(
factorialDivision(6,2)
)