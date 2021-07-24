//! string

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo quibusdam ipsum repellat veritatis unde accusantium corrupti, cumque quisquam, dicta nihil impedit dolorum eos accusamus consequuntur obcaecati. Accusantium, consequatur dolores."

typeof String('Hello world'); // string // Constructor
typeof new String('Hello world'); // object

str.split(separator, limit); // split str in array
str.trim(); // removes whitespace from both ends of a string
str.trimEnd(); // trimRight()
str.trimStart(); // trimLeft()

str.charAt(index);
str.charCodeAt(index);
str.codePointAt(index); // UTF-16 code point value.
str.endsWith(searchString, endPosition); // determines if string ends with a specified string
str.startsWith(searchString, position); // if start 

strObject.toString(); // strObject = new String('foo'); == String { "foo" }
stringObj.valueOf(); // return "foo"
str.toLowerCase();
str.toUpperCase();

str.repeat(count) // returns a new string which specified number of copies

str.padEnd(maxLength, fillString); // pads string with a given string so that the resulting string reaches a given length.
str.padStart(maxLength, fillString); // same

str.replace(string, replaceValue); // replace first appear, or use regexp
str.replaceAll(string, replaceValue); // replace all

str.search(regexpOrString);
str.match(regexpOrString); // result of matching a string against a regular expression.
str.matchAll(regexp); // returns an iterator of all results matching a string against a regular expression, including capturing groups.

str.normalize(form); // Unicode Normalization Form, "NFC"(default), "NFD", "NFKC", or "NFKD"

String.fromCharCode(num1, num2, numN); // string created from UTF-16 code units
String.fromCodePoint(num1, num2, numN); // string created from code points

str.substring(start, end); // like slice

//! from arrays
str.length;
str.concat(item0, item1, itemN);
str.includes(searchString, fromIndex);
str.indexOf(searchElement, fromIndex);
str.lastIndexOf(searchElement, fromIndex);
str.slice(start, end);

//! others
str.localeCompare(compareString, locales, options);
str.toLocaleLowerCase([locale1, locale2, localeN]);
str.toLocaleUpperCase([locale1, locale2, localeN]);

String.raw(callSite, ...substitutions) // filepath :\..\
String.raw`templateString` //  is a tag function of template literals.