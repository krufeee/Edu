function fruitCalc(fruit, weight, pricePerKg) {
    let weightInKg = weight / 1000;
    let neededMoney = weightInKg * pricePerKg;
    result = `I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
    console.log(result) 
}