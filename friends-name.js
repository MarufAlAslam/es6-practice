const friends = (names) => {
    const evenLength = names.filter(name => name.length % 2 === 0);
    const evenNames = [...evenLength]
    return evenNames;
}

console.log(friends(['maruf', 'James', 'Jill', 'Jane']))