const copyArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    return newArray;
}

console.log(copyArray([1, 2, 3], [4, 5, 6]))