// const person = {
//     name: 'hoi',
//     talk() {
//     console.log(this);

//     }

// };

// person.talk();

// const talk = person.talk.bind(person);
// talk();

//2
// const square = function(number) {
//     return number * number;
// }

// const square = number =>number * number;
// console.log(square(5));
    
//3

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter(function(job)) {return jobs.isActive}; });
// const activeJobs = jobs.filter(job => jobs.isActive);

//4

// const person = {
//     talk(){
//         var self = this;
//         setTimeout(() => {
//         console.log("this",this);
//         }, 1000);
//     }
// }
// person.talk();

//5

// const colors = ['red', 'green', 'blue'];
// colors.map(function(color){
//     return '<li>' + colors + '</li>';
// });

// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => '<li>' + colors + '</li>'); // change to arrow func
// const items = colors.map(color => '<li>${colors}</li>'); // new array
//console.log(colors);

//6 desconstructuring

// const address ={
//     street: '',
//     city: '',
//     country: ''
// };
// // const street = addrses.street...console...console;
// // //change to

// const{ street, city, country} = address;

// const{ street: st} = address;

// 7 spread operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];// can clone an array

// const clone = [...first];
// console.log(first);
// console.log(second);

// const first ={ name: 'hoi yee'};
// const second={ job: 'instructor'};

// const combined = {...first, ...second, location: "Australia"};
// console.log(combined);

// const clone = { ...first}; //to clone first object

//8 constructor

const person ={
    name: 'hoiyee',
};

class Person {
    constructor(name){
        this.name = name;
}
        walk(){
            console.log("walk");
        }
}

const person = new Person ('hoiyee');

//9 inhertiance

class Teacher extends Person{

    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach"); // teacher inherit person
    }
}

const teacher = new Teacher ('hoi yee', 'master');

// 10 modules //spread code in mulitple files, each file is called module

//use def if export single obj, a class is an object

// def = > import ... from '';
//name => import {...} from '';

import Teacher, {promote} from "./teacher";
const teacher = new Teacher ('hoi yee', 'master');
teacher.teach();

//11 named and def export
