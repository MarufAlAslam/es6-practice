let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// forEach never returns anything
numbers.forEach(number => {
    number = number + 100
    console.log(number)
})

// result()