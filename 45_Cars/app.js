"use strict";
function store_car_info(manufacturer, model, ...args) {
    let car = { manufacturer, model };
    // Process keyword arguments
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(store_car_info("Totota", "Corolla", ["color", "black"], ["year", 2020]));
console.log(store_car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
