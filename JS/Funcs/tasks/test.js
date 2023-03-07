function numsCount(str) {
    let counter = str.match(/\d/g)

    return counter.lenght
}

console.log(numsCount('mypass123'))