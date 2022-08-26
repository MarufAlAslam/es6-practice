const student = {
    name: 'John',
    age: 26
}

const age = student.age
console.log(age)


let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}

const data2 = { ...data.location[0] }
const city = data2.city
console.log(city)