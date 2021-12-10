class Vehicle {
    constructor(year) {
        this._year = year;
    }

    start() {
        console.log("the Veicle started ....");
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        this._year = newYear;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(year);

        this._brand = brand;
        this._model = model;
    }

    start() {
        super.start();
        console.log("The car started.....");
    }

    static toString() {
        console.log("toString() called..");
    }
}

let car4 = new Car("BMW", "X6", 2019);
let car5 = new Car("Tesla", "Yangi", 2021);

car5.year = 2020;
car4.start();

console.log(car4._year);
console.log(car5);
Car.toString();
