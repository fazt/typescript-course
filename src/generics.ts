function getLast<T>(arr: T[]): T {
  return arr[arr.length - 1]
}

const result = getLast<number>([1, 2, 3])
const result2 = getLast<string>(['a', 'b', 'c'])
console.log(result)
console.log(result2)