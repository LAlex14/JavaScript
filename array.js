//! Array() constructor

//* [element0, element1, ..., elementN]
//* new Array(element0, element1, ..., elementN)
//* new Array(arrayLength)

let array = ['apple', 'banana'], array = new Array(1, 2, 3), array = new Array(3); // constructor

for (const [index, element] of array) { } // of : over elements
for (const [index, element] in array) { } // in : enumerable properties keyed by strings (ignoring ones keyed by Symbols)

array.forEach((element, index, array) => { }); // executes a provided function once for each array element.
let newArr = array.map((element, index, array) => { }); //* creates a new array populated with the results 

array.toString(); // returns a string representing the array elements, separated by ,
array.join(separator) // returns a new string from elements, separator default is ','

//! --------------------------------------------------
array.push(element0, element1, elementN); //* Add to the end, return length
array.unshift(element0, element1, elementN); //* add to the front, return length
array.pop(); //* Remove from the end, return removed item
array.shift(); //* Remove from the beginning, return removed
array.reverse(); //* reverses an array in place

array.fill(value, start, end); //* must-know
array.copyWithin(target, start, end); // copies array elements to another position in an array, overwriting the existing values.

array.splice(start, deleteCount, itemsToAdd); //* Remove an item by index, return removed items => array.splice(start, deleteCount)

array.slice() //* this is how to make a array copy
array.slice(start, end) //* returns a copy of a portion of an array from start to end (end not included)

array.sort((firstEl, secondEl) => { }); //* sort by fctn, default sort is ascending in alphabetical
array.concat(item0, item1, itemN); // concat arrays, return concated array, not change current arr
array.flat(depth); //* creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
array.flatMap((currentValue, index, array) => { }) // map() followed by a flat() of depth 1

array.at(-1); // Returns the array item at the given index. Accepts negative integers, which count back from the last item.

array.entries(); //* A new Array iterator object. Object { value: [index, element], done: false }
array.values(); // returns a new Array Iterator. Object { value: element, done: false }
console.log([...[1, 2, , , 3, , 5].keys()]) // [0, 1, 2, 3, 4, 5, 6]
console.log(Object.keys([1, 2, , , 3, , 5])) // [ '0', '1', '4', '6' ], also works on objects

array.every((element, index, array) => { element == index + 2 }); //* must-know
array.some((element, index, array) => { element == index + 2 }); //* must-know

array.filter((el, index, array) => el == index + 2) //* creates a new array with all elements that pass the test
array.find((el, index, array) => el == index + 2) //* returns the value of the first filtered element
array.findIndex((el, index, array) => el == index + 2) // returns the index of the first filtered element

array.includes(searchElement, fromIndex); //* returns true or false
array.indexOf(searchElement, fromIndex); //* returns first index or -1 if it is not present.
array.lastIndexOf(searchElement, fromIndex) // returns last index or -1 if it is not present.

array.reduce((accumulator, currentValue, index, array) => { }, initialValue)
//* executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
array.reduceRight((accumulator, currentValue, index, array) => { }, initialValue) // same but from right to left


//!--------------------------------------------------
Array.from(array, (el, index) => el + index); //* Creates a new Array instance from an array-like or iterable object.
Array.isArray(array); // Returns true if the argument is an array, or false otherwise.
Array.of(7, 1, 2); // [7, 1, 2]
Array(7); // array of 7 empty slots

//! -------------------------------------------------
array.toLocaleString(locales, { options }); // returns a string representing the elements of the array. 
// The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
