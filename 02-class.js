class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getDetail() {
    return `This is a ${this.year} ${this.brand}`;
  }
}

const myCar = new Car("daihatsu", 2014);
console.log(myCar.getDetail());
