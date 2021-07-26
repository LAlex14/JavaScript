// 1. Write a function that accepts an array of strings. Return the longest string.
{
    const longestString = (arr) => {
        return arr.reduce((acc, el) => el.length > acc.length ? el : acc, '');
    }

    console.log(longestString(['a', 'ab', 'abc', 'bcd']))
}