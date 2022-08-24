const doMath = (arr) => {
    let sqr = 0;
    let sumOfSqr = 0;
    let avgOfSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sqr = Math.pow(arr[i], 2);
        sumOfSqr += sqr;
        console.log(sqr, sumOfSqr)
    }
    avgOfSum = sumOfSqr / arr.length;
    return avgOfSum
}

console.log(doMath([1, 2, 3, 4, 5]))