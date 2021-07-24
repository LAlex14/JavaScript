//! typeof

typeof 7;
typeof (7);

//* types(8):   null,   bigInt, undefined, boolean, number, string, object, Symbol
//* typeof(8):  object, bigint, undefined, boolean, number, string, object, Symbol
//* primiteve:  null,   bigInt, undefined, boolean, number, string, Symbol

//* false == Nan, null, '', undefined, false, 0

let types = {
    1: {
        type: 'undefined',
        typeof: typeof undefined,
        examples: undefined
    },
    2: {
        type: 'boolean',
        typeof: typeof false,
        examples: [true, false]
    },
    3: {
        type: 'number',
        typeof: typeof NaN,
        examples: [NaN, 3.14, 14, Infinity, Number('shoe')]
    },
    4: {
        type: 'string',
        typeof: typeof '1',
        examples: ['', String(1), typeof (1)]
    },
    5: {
        type: 'bigInt',
        typeof: typeof 7n,
        examples: 7n
    },
    6: {
        type: 'symbol',
        typeof: typeof Symbol(),
        examples: [Symbol(), Symbol.iterator]
    },
    7: {
        type: 'object',
        typeof: typeof [],
        examples: [[], {}, /regex/, new Date()]
    },
    8: {
        type: 'function',
        typeof: typeof Object,
        examples: [Object, Math.sin, class C { }, function () { }]
    },
    9: {
        type: 'null',
        typeof: typeof null,
        examples: null
    },

}

console.table(types);
/**
* *┌─────────┬─────────────┬─────────────┬────────────────────────────────────────────────────────┐
* *│ (index) │    type     │   typeof    │                        examples                        │
* *├─────────┼─────────────┼─────────────┼────────────────────────────────────────────────────────┤
* *│    1    │ 'undefined' │ 'undefined' │                       undefined                        │
* *│    2    │  'boolean'  │  'boolean'  │                    [ true, false ]                     │
* *│    3    │  'number'   │  'number'   │       [ NaN, 3.14, 14, Infinity, Number('shoe') ]      │
* *│    4    │  'string'   │  'string'   │           [ '', '1', String(1), typeof (1) ]           │
* *│    5    │  'bigInt'   │  'bigint'   │                           7n                           │
* *│    6    │  'symbol'   │  'symbol'   │         [ Symbol(), Symbol(Symbol.iterator) ]          │
* *│    7    │  'object'   │  'object'   │             [ [], {}, /regex/, new (...) ]             │
* *│    8    │ 'function'  │ 'function'  │  [ [Object, Math.sin, class C { }, function () { }] ]  │
* *│    9    │   'null'    │  'object'   │                          null                          │
* *└─────────┴─────────────┴─────────────┴────────────────────────────────────────────────────────┘ 
*/


{
    typeof undeclaredVariable === 'undefined';
    typeof Object === 'function'; // true
    undefined * undefined == NaN; // true

    // typeof newLetVariable; // ReferenceError
    // typeof newConstVariable; // ReferenceError
    // typeof newClass; // ReferenceError
    // function arguments is an object (except arrow fct)

    let newLetVariable;
    const newConstVariable = 'hello';
    class newClass { };
}

{   // Exceptions
    + 0 === -0;             // true
    Object.is(+0, -0);      // false

    42 / +0 == Infinity;    // true
    42 / -0 == -Infinity;   // true

    NaN === NaN;            // false
    Object.is(NaN, NaN);    // true

    Number.MIN_VALUE > 0;   // true

}