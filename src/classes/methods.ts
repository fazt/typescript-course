class MyMath {
  constructor() {}

  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

const math = new MyMath();
console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
