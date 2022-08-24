const friends = (names) => {
    const evenLength = names.filter(name => name.length % 2 === 0);
    return evenLength;
}

console.log(friends(['maruf', 'James', 'Jill', 'Jane']))