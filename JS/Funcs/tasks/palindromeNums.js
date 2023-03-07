function palindromes(nums) {
    nums.forEach(num => {
        let isLegit = true
        num = String(num);
        for (let index = 0; index < num.length / 2; index++) {
            if (num[index] != num[num.length-1 - index])
            isLegit = false
            break
        }
        console.log(isLegit)
    });
}

palindromes([32,2,232,1010])