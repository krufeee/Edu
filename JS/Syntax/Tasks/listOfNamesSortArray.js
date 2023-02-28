function sortArray(collection) {
    collection = collection.sort()
    if (collection) {
        for (let index = 0; index < collection.length; index++) {
            console.log(`${index + 1}.${collection[index]}`)
        }
    }
}

sortArray(["John", "Bob", "Christina", "Ema"])