function nth(collection, num) {
    let counter = 0;
    let result = [];
    for (let index = 0; index < collection.length; index++) {
        if (index === 0) {
            result.push(collection[index])
        }
        else {
            counter += 1
        }

        if (counter === num) {
            result.push(collection[index])
            counter = 0
        }

    }
    return result
}

nth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)