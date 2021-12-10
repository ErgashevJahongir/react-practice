let car1 = { brand: "BMW", model: "X6", year: 2019 };

//template unction
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car4 = new Car("BMW", "X6", 2019);
let car5 = new Car("Tesla", "Yangi", 2021);

console.log(car4);
console.log(car5);
