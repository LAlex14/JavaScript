// 1. Write a JavaScript function to check whether an `input` is an array or not.
{
    const is_array = (arr) => Array.isArray(arr);

    console.log(is_array('w3resource')); // false
    console.log(is_array([1, 2, 4, 0])); // true
}

// 2. Write a JavaScript function to clone an array.
{
    // const cloneArr = (arr) => {
    //     return arr.map((item) => {
    //         if (Array.isArray(item)) {
    //             return cloneArr(item);
    //         } else {
    //             return item;
    //         }
    //     });
    // };

    const array_Clone = (arr) => arr.slice();

    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
}

// 3. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.
{
    // const first = (arr, n = 1) => arr.slice(0, n < 0 ? 0 : n);
    const first = (arr, n = 1) => arr.filter((_, index) => index < n);
    console.log(first([7, 9, 0, -2]));      // 7
    console.log(first([], 3));              // []          
    console.log(first([7, 9, 0, -2], 3));   // [7, 9, 0]
    console.log(first([7, 9, 0, -2], 6));   // [7, 9, 0, -2]
    console.log(first([7, 9, 0, -2], -3));  // []
}

// 4. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.
{
    const last = (arr, n = 1) => arr.filter((_, index) => index >= arr.length - n)

    console.log(last([7, 9, 0, -2]));    // -2
    console.log(last([7, 9, 0, -2], 3));  // [9, 0, -2]
    console.log(last([7, 9, 0, -2], 6));  // [7, 9, 0, -2]
}

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between 
// each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
{
    const insertDashes = (number) => {
        number = number.split('');
        let newArr = number.map((el, index) => el % 2 === 0 && number[index + 1] % 2 === 0 ? el + '-' : el);
        return newArr.join('');
    }

    console.log(insertDashes('02546878'))
}

// 7. Write a JavaScript program to find the most frequent item of an array. Go to the editor
{
    const mostFrequent = (arr) => {
        let uniqueArr = Array.from(new Set(arr));
        let appears = uniqueArr.map(uniqueArrEl => {
            let elAppear = 0;
            arr.forEach(arrEl => {
                if (arrEl === uniqueArrEl)
                    elAppear++;
            });
            return elAppear;
        })
        return uniqueArr[appears.indexOf(Math.max(...appears))];
    }

    console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
}

// 8. Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
{
    const swapCase = (string) => {
        let newString = '';
        for (let i = 0; i < string.length; i++)
            newString = string[i] === string[i].toLowerCase() ? newString + string[i].toUpperCase() : newString + string[i].toLowerCase();

        return newString;
    }

    console.log(swapCase('The Quick Brown Fox - ? 112'))
}

//10. Write a JavaScript function to get a random item from an array.
{
    function randomItem(arr) {
        return arr[Math.floor(Math.random() * (arr.length - 1))];
    }

    console.log(randomItem([1, 2, 3, 4, 5, 7, 8, 9]))
}

// 11. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
{
    const array_filler = (length, entry) => new Array(length).fill(entry);

    console.log(array_filler(6, 0))
    console.log(array_filler(4, 11))
}
