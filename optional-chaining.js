let obj = {
    name: 'John',
    age: 30,
    isMarried: true,
    wife: {
        firstWife: 'hannah',
        secondWife: 'anna'
    },
    baby: {
        firstBaby: {
            name: 'jenny',
            age: 2,
            gender: 'female'
        },
        secondBaby: {
            name: 'jane',
            age: 1,
            gender: 'male'
        }
    }
}

// ডট এর আগে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়
console.log(obj.baby?.firstBaby.name?.firstName)