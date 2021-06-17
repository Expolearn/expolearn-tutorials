MyCar = {
  type: "Mazerati",
  model: "S3",
  year: "2020",
  colors: {
    vip: "blue",
    firstClass: "red",
    economic: "white",
  },
};

var carType = MyCar.type;
console.log(carType);

var MyCarColor = MyCar.colors.vip;

console.log(MyCarColor);

class Car {
  constructor(carType, carModel, carYear) {
    this.carType = "Ford";
    this.carModel = "Mustang";
    this.carYear = 2021;
  }

  getColor() {
    let colours = {
      vipType: "red",
      firstClassType: "blue",
      economicType: "white",
    };

    return colours;
  }

  JoelCar(carT, carM, carY) {
    carT = this.carType;
    carM = this.carModel;
    carY = this.carYear;
    return "your car is a " + carT + " " + carM + " " + carY;
  }
}

secondCar = new Car();

class CarB extends Car {}

console.log(CarB);

console.log(secondCar.JoelCar("VW", "Sport", 2021));
// Define a user and use all the details and define an address as an object with proprties such as street number, suburb, city, Country using OOP.
// Display each detail on the console or table format.
