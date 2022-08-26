let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter always finds the matching and return them as an array
const filteredValues = numbers.filter(number => number % 2 === 0)

console.log(filteredValues)