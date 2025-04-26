let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const obj in statistics) {
    if (obj[0] == 'r' || statistics[obj] % 2 != 0) {
        console.log(statistics[obj]);
    }
}