interface ITransport {
  name: string;
  speed: number;
  move: () => string
}

class Transport implements ITransport {
  constructor(public name: string, public speed: number) {}

  move() {
    return `${this.name} is moving at ${this.speed} km/h`;
  }
}

const car = new Transport("Car", 100);
console.log(car.move());
