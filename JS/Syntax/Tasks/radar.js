function radar(speed, area) {
    var dictLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (dictLimit[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${dictLimit[area]} zone`)
    }
    else {
        let speedDif = speed - dictLimit[area];
        if (speedDif <= 20) {
            console.log (`The speed is ${speedDif} km/h faster than the allowed speed of ${dictLimit[area]} - speeding`)
        }

        else if (speedDif > 20 && speedDif <= 40) {
            console.log (`The speed is ${speedDif} km/h faster than the allowed speed of ${dictLimit[area]} - excessive speeding`)
        }

        else {
            console.log (`The speed is ${speedDif} km/h faster than the allowed speed of ${dictLimit[area]} - reckless driving`)
        }
    }
}
