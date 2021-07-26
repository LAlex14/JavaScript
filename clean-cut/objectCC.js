//! Constructor

let obj = new Object, obj = new Object(value);

typeof yourObj === 'object' && yourObj !== null && !Array.isArray(yourObj);
// check if obj

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

console.log('propertyName' in myobj);
object1.hasOwnProperty('propertyName'); // => return true or false

Object.is(value1, value2);
Object.assign(targetObject, ...propertySourcesObjects);
Object.entries(object1) // [key, value] pairs. 
Object.fromEntries([['foo', 'bar'], ['baz', 42]]); // {foo: "bar", baz: 42}
Object.values(object1);

Object.getOwnPropertyNames(object1); // => return ["a", "b", "c"]
Object.getOwnPropertyDescriptor(object1, 'property1'); // => descriptor1.value
Object.getOwnPropertyDescriptors(object1);
// obj property descriptors: value, writable, get, set, configurable, enumerable
object1.propertyIsEnumerable('property1');

Object.defineProperty(object1, 'propertyName', {
    value: 42,
    writable: false
});

Object.defineProperties(object1, {
    property1: {
        value: 42,
        writable: true
    },
    propertyN: {}
});

Object.preventExtensions(object1);
Object.isExtensible(object1); // prevents to add new properties

Object.seal(object1);
Object.isSealed(object1) // return true or false
// is not extensible, non-configurable and not removable (but is writable).

Object.freeze(obj);
Object.isFrozen(object1); // seal + non-writable.

const prototype1 = {};
const object1 = Object.create(prototype1);
Object.getPrototypeOf(object1) === prototype1; // true

//! from arrays
Object.keys([1, 2, , , 3, , 5]);
object1.toString();
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