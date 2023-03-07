function loading(num) {
    let percentCount = num / 10;
    let dotCount = 10 - percentCount;
    if (num !== 100) {
        console.log(`${num}% [${'%'.repeat(percentCount)}${'.'.repeat(dotCount)}]`)
        console.log('Still loading...')
    }
    else {
        console.log('100% Complete!')
    }
    
}

loading(30)