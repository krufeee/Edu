function sortNums(collection) {
    const ascCollection = collection.sort(function(a, b){return a - b})
    let myCollection = Array()
    for (let index = 0; index < collection.length / 2; index++) {
        let firstEl = ascCollection[index]
        let nextEl = ascCollection[collection.length - index -1]
        myCollection.push(firstEl)
        myCollection.push(nextEl)

    }
    // myCollection = myCollection.map(function(a){return String(a)})
    console.log(myCollection)
}


sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])