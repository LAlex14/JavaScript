var o1 = new Object();
o1.make = 'Ford';
o1.model = 'Mustang';
o1.year = 1970;

var o2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1970
}

function displayYear() {
    console.log(this.year)
};

function Car(make, model, year) {
    this.make = make, this.model = model, this.year = year,
        this.displayYear = displayYear;
}

// Car.prototype.color = null; // add properties

// Car.color = displayYear;

var mustang = new Car(123, 456, 789);

// console.log(mustang)

mustang.displayYear();

// function dModel() {
//     console.log(this.model);
// }

// mustang.dModel = dModel;
// mustang.dModel();

// var house = {
//     make: 1990,
//     // get b() {
//     //     return this.make;
//     // },
//     // set c(x) {
//     //     this.make += x;
//     // }
// }

// Object.defineProperties(house, {
//     'b': {
//         get: function () { return this.make; }
//     },
//     'c': {
//         set: function () { this.make += 10; }
//     }
// })

// // house.c = 50;
// house.c = 10; // initiated set method
// // delete house.b;
// console.log(house.b);

// var myobj = new Object;
// myobj.a = 5;
// delete myobj.a;

// console.log('a' in myobj)


// const name = "Brendan";
// const obj = {
//     [name]: 'dan'
// }

// console.log(obj['Brendan'])
