//! Array() constructor

let array = ["element0", "element1", "elementN"],
    array = new Array("element0", "element1", "elementN"),
    array = new Array(3); // array.length

for (const [index, element] of array) { }
for (const [index, element] in array) { }

array.forEach((element, index, array) => { });
let newArr = array.map((element, index, array) => { });

array.toString();
array.join(separator);

//! --------------------------------------------------
array.push(items);
array.unshift(items);
array.pop();
array.shift();
array.reverse();

array.fill(value, start, end);
array.copyWithin(target, start, end); // copies array elements to another position in an array, overwriting the existing values.

array.splice(start, deleteCount, itemsToAdd);

array.slice(); //* array copy
array.slice(start, end);

array.sort((firstEl, secondEl) => { });
array.concat(items);
array.flat(depth);
array.flatMap((element, index, array) => { });

array.every((element, index, array) => { });
array.some((element, index, array) => { });

array.filter((element, index, array) => { });
array.find((element, index, array) => { });
array.findIndex((element, index, array) => { });

array.includes(searchElement, fromIndex);
array.indexOf(searchElement, fromIndex); // -1 if not
array.lastIndexOf(searchElement, fromIndex);

array.reduce((accumulator, element, index, array) => { }, initialValue);
array.reduceRight((accumulator, element, index, array) => { }, initialValue);

array.entries(); //* { value: [index, element], done: false }
array.values(); //  { value: element, done: false }
console.log([...[1, 2, , , 3, , 5].keys()]);
console.log(Object.keys([1, 2, , , 3, , 5]));

//!--------------------------------------------------
Array.from(array, (element, index) => element + index);
Array.isArray(array);
Array.of(7, 1, 2);
Array(7); // 7 empty slots

//! -------------------------------------------------
array.toLocaleString(locales, { options });
