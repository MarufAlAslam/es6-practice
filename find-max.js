const getMax = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    const getMax = Math.max(...newArray);
    return getMax
}


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(`Max is ${getMax(arr1, arr2)}`)