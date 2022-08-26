let oddArray = [1, 3, 5, 7, 9]
let evenArray = []

for (let i = 0; i < oddArray.length; i++) {
    const value = oddArray[i] + 1
    evenArray.push(value)
}

console.log(evenArray)