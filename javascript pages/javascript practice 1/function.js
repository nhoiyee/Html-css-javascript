// named function

function addNum (a,b){

    console.log("function addNum");
    return a+b;
}

// console.log(addNum (7,3));
// var sum = addNum(2,3);
// console.log(sum);
// addNum(80,3);

var anon=function (a,b){
    console.log("annoymous function here");
    return a+b;
}

console.log(anon(3,8)); //11

setTimeout(function(){console.log("annoymou here function")}, 3000);

//constructor
var cons=new Function("a","b","console.log('in constructor function');return a+b;");
console.log(cons(7,3));


//self invoking function
(function h(a,b){
    console.log("self invoking function here")
    return a+b;
})(2,7);