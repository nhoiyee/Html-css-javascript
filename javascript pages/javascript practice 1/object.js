//object creation
function createPerson(){
    
    var person = new Object();
    person.name="hoiyee";
    person.designation="trainer";
    person.phno=238964386290;
    return person;
}

var hoiyee =createPerson();

//2nd way
function createPerson2(){
    var person = {};
    person.name="hoiyee2";
    person.designation="stu";
    person.phno=238964386290;
    return person;
}

hoiyee =createPerson2();

//3rd way - got alert
// function createPerson3(){
//     var person = {};
//     person['name']="hoiyee2";
//     person['designation']="stu";
//     person['phno']=238964386290;
//     return person;
// }

// hoiyee=createPerson3();
// alert("name: "+hoiyee.name+"designation: " + hoiyee.designation
// + " " + hoiyee.phno)

//4th
function createPerson4(){
        var person= {

            name:"hoi yee",
            age:40,
            designation:"teacher",
            phno:2189900
        };
    return person;
}

hoiyee= createPerson4();

//5th
function Person(){

    this.name="hoiyee";
    this.designation="engineer";
    this.age=30;
}
hoiyee= new Person();

//6th - copy
var Animal ={ 
    
    type:"invertibrates",
    displayType: function(){alert("type is"+this.type);}
    }



