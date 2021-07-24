//! string

typeof String('Hello world');

str.split(separator, limit);
str.trim();
str.trimStart();
str.trimEnd();
str.toLowerCase();
str.toUpperCase();

str.charAt(index);
str.repeat(count);

str.startsWith(searchString, position);
str.endsWith(searchString, endPosition);

str.padEnd(maxLength, fillString);
str.padStart(maxLength, fillString);

str.replace(regexpOrString, replaceValue);
str.replaceAll(regexpOrString, replaceValue);

str.search(regexpOrString);
str.match(regexpOrString);
str.matchAll(regexp);

str.substring(start, end); // like slice

//! from arrays
str.length;
str.concat(item0, item1, itemN);
str.includes(searchString, fromIndex);
str.indexOf(searchElement, fromIndex);
str.lastIndexOf(searchElement, fromIndex);
str.slice(start, end);

//! others
{
    strObject = new String('foo');
    strObject.toString(); // String { "foo" }
    stringObj.valueOf(); // return "foo"

    str.normalize(form); // Unicode Normalization Form, "NFC"(default), "NFD", "NFKC", or "NFKD"

    str.charCodeAt(index);
    str.codePointAt(index); // UTF-16 code point value.
    String.fromCharCode(num1, num2, numN); // string created from UTF-16 code units
    String.fromCodePoint(num1, num2, numN); // string created from code points

    str.localeCompare(compareString, locales, options);
    str.toLocaleLowerCase([locale1, locale2, localeN]);
    str.toLocaleUpperCase([locale1, locale2, localeN]);

    String.raw(callSite, ...substitutions) // filepath :\..\
    String.raw`templateString` //  is a tag function of template literals.
}