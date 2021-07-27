{
    let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

    const oddLengths = arr => arr.reduce((newArr, el) => {
        if (el.length % 2)
            newArr.push(el.length);
        return newArr;
    }, [])

    console.log(oddLengths(arr)); // => [1, 5, 3]
}

{
    let numbers1 = [1, 3, 5, 7, 9, 11];
    let numbers2 = [];
    let numbers3 = [2, 4, 6, 8];

    const nr3 = arr => arr.includes(3);

    console.log(nr3(numbers1));
    console.log(nr3(numbers2));
    console.log(nr3(numbers3));
}

