class Computer {
  private id: number;

  constructor(public brand: string, public price: number) {
    this.id = Math.random();
  }

  // This is a method
  showInfo() {
    console.log(`${this.id}, ${this.brand} costs ${this.price}`);
  }
}

const laptop1 = new Computer("Mac", 1000);
const laptop2 = new Computer("Lenovo", 2000);

console.log(laptop1);
console.log(laptop2);
