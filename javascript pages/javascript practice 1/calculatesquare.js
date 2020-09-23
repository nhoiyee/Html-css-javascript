//name function

function nCalSquare(a){
    return a*a;
}
console.log("calling names function: "+nCalSquare(9));

//annoymous <script type="text/javascript" src="function.js"></script>
var aCal=function (b){
    return b*b;
}

console.log("calling annoyous function: "+aCal(6));

//new constructor
var cCal=new Function("a","return a*a;");
console.log("call constructor: "+cCal(7));

//self invoking
(function(a){ console.log("calling self in "+a*a);
return a*a;
})(9);