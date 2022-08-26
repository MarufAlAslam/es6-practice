const people = [
    { name: 'meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Tina', age: 22 },
]

const [meena, rina, tinna] = people

const ageSum = people.reduce((sum, age) => sum + age.age, 0)

console.log(ageSum)