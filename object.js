//! Constructor

let obj = new Object, obj = new Object(value);

//* first method
{
    function Tree(name) {
        this.name = name
    }

    let theTree = new Tree('Redwood');
}

//* second method Object.create()
{
    const Tree = {
        name: TreeName,
        clgName: function () {
            console.log(this.Name);
        }
    }
    const firstTree = Object.create(Tree, propertiesObject);

    firstTree.isTree = true; // .isTree is a property set on 'firstTree', but not on 'Tree"
    firstTree.name = 'Nuc'; // inherited properties can be overwritten
}

console.log('propertyName' in myobj); // true or false

Object.assign(target, ...sources)
//* copies all properties from more source objects to a target object. It returns the modified target object.

Object.defineProperties(obj, propertiesObject)
//* defines new or modifies existing properties directly on an object, returning the object. example:
{
    Object.defineProperties(object1, {
        property1: {
            value: 42,
            writable: true
        },
        property2: {}
    });
}

Object.defineProperty(obj, propName, descriptor)
//* defines a new property, or modifies an existing property on an object, and returns the object.
{
    Object.defineProperty(object1, 'property1', {
        value: 42,
        writable: false
    });
}

Object.entries(object1)
// returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 

Object.seal(object1);
Object.isSealed(object1) // return true or false
// is not extensible, properties are non-configurable and not removable (but is writable).

Object.freeze(obj); // freezes an object.
Object.isFrozen(object1) // return true or false
// is not extensible, all its properties are non-configurable, and all its data properties are non-writable.

Object.fromEntries(entries);
// transforms a list of key-value pairs into an object.
const entries = new Map([['foo', 'bar'], ['baz', 42]]); // = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(entries);

descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1'); // => descriptor1.value

const descriptors1 = Object.getOwnPropertyDescriptors(object1); // => descriptors1.property1.value
// obj property descriptors: value, writable, get, set, configurable, enumerable

Object.getOwnPropertyNames(object1); // => return ["a", "b", "c"]

Object.getPrototypeOf()
const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); // true

object1.hasOwnProperty('propertyName'); // => return true or false

Object.is(value1, value2); // determines whether two values are the same value.

Object.isExtensible(object1) // => return true or false

Object.preventExtensions(object1); // prevents new properties from ever being added to an object

object1.propertyIsEnumerable('property1')
// returns a Boolean indicating whether the specified property is enumerable and is the object's own property

Object.values(object1) // returns an array of a given object's own enumerable property values

//! from arrays
Object.keys([1, 2, , , 3, , 5]);
object1.toString() // method returns a string representing the object.
object1.toLocaleString(locales, { options });

//! skiped
Object.getOwnPropertySymbols();
Object.prototype.isPrototypeOf();
Object.setPrototypeOf();

{ // .valueOf() => returns the primitive value of the specified object.
    function MyNumberType(n) {
        this.number = n;
    }

    MyNumberType.prototype.valueOf = function () {
        return this.number;
    };

    const object1 = new MyNumberType(4);

    console.log(object1 + 3);
}


