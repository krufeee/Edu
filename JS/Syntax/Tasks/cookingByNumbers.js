function cook(number, ...args) {
    function chop(number) {
        number = number / 2
        return number
    }

    function dice(number) {
        number = Math.sqrt(number);
        return number
    }

    function spice(number) {
        number += 1;
        return number
    }

    function bake(number) {
        number *= 3;
        return number
    }

    function fillet(number) {
        number *= 0.8;
        return number
    }


    let currentNum = Number(number);

    for (let index = 0; index < args.length; index++) {
        let element = args[index];


        if (element === 'chop') {
            currentNum = chop(currentNum);
        }
        else if (element === 'dice') {
            currentNum = dice(currentNum);
        }
        else if (element === 'spice') {
            currentNum = spice(currentNum);
        }
        else if (element === 'bake') {
            currentNum = bake(currentNum);
        }
        else if (element === 'fillet') {
            currentNum = fillet(currentNum);
        }

        if (Number.isInteger(currentNum)) {
            console.log(currentNum)
        }
        else {
            console.log(currentNum.toFixed(1))
        }
    }
}

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet')