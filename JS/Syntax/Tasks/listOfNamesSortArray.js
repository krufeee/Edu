// function sortArray(collection) {
//     collection = collection.sort()
//     if (collection) {
//         for (let index = 0; index < collection.length; index++) {
//             console.log(`${index + 1}.${collection[index]}`)
//         }
//     }
// }

function sortArray(names) {
    collection = [...names].sort((aName, bName) => { 
        let result = aName.localeCompare(bName);
        return result;
    })
    if (collection) {
        for (let index = 0; index < collection.length; index++) {
            console.log(`${index + 1}.${collection[index]}`)
        }
    }
}






function namesSort(names) {
    return [...names]
    .sort((a,b) => a.localeCompare(b))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n');  
}


console.log(
namesSort(["John", "Bob", "Christina", "Ema"])
)