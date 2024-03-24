function store_car_info(manufacturer: string, model: string, ...args: [string, any][]): object {
    let car: any = { manufacturer, model };

    // Process keyword arguments
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

console.log(store_car_info("Totota", "Corolla", ["color", "black"], ["year", 2020]));
console.log(store_car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
