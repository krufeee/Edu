function vacation(numberOfPpl, typeOfGroup, day) {
    let price = 0;
    if (typeOfGroup === 'Students'){
        if (day === 'Friday'){
            price = 8.45;
        }
        if (day === 'Saturday'){
            price = 9.80;
        }
        if (day === 'Sunday'){
            price = 10.46;
        }
    }

    if (typeOfGroup === 'Business'){
        if (day === 'Friday'){
            price = 10.90;
        }
        if (day === 'Saturday'){
            price = 15.60;
        }
        if (day === 'Sunday'){
            price = 16;
        }
    }

    if (typeOfGroup === 'Regular'){
        if (day === 'Friday'){
            price = 15;
        }
        if (day === 'Saturday'){
            price = 20;
        }
        if (day === 'Sunday'){
            price = 22.50;
        }
    }
   

    if (numberOfPpl >= 30 && typeOfGroup == 'Students'){
        price = price * 0.85;
    }

    if (numberOfPpl >= 100 && typeOfGroup == 'Business'){
        numberOfPpl = numberOfPpl - 10;
    }

    if (numberOfPpl >= 10 && numberOfPpl <= 20 && typeOfGroup == 'Regular'){
        price = price * 0.95;
    }

    totalPrice = price * numberOfPpl;
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
