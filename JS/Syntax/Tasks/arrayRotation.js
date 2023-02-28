function rotation(collection, rotations) {
    for (let index = 0; index < rotations; index++) {
        let first = collection.shift()
        collection.push(first)
        
    }
    console.log(collection.join(' '))
}


rotation([51, 47, 32, 61, 21], 2)
