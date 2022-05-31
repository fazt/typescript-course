let user: [string, number, boolean] = ["John", 30, true];
console.log(user)

// update a tuple
user[0] = "Peter";
user[1] = 31;
user[2] = false;

console.log(user)

// array of tuples
let students: [string, number][];

students = [
  ["John", 30],
  ["Peter", 35],
  ["Mary", 28],
]

console.log(students)