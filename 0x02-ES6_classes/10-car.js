export default class Car {
  constructor(brand, model, year) {
    this._brand = brand;
    this._model = model;
    this._year = year;
  }

  cloneCar() {
    return new Car(this._brand, this._model, this._year);
  }
}
