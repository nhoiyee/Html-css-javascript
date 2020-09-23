    /*The destructuring assignment allows unpack values from arrays into distinct variables.
    we can extract data from arrays and objects and assign them to variables

    use - for single object with multiple properties as a parameter. instead of
    remembering the order of many individual parameters,
    destructuring helps to avoid repeating this single parameter object 
    whenever we want to reference one of its properties.

    **/

function smallTalk(){
    var { start, end } = { start: "fine", end: "go out" };
    
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('The weather is ' + start + ' , I want to ' + end);
    h1.setAttribute('id','smallTalk');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('smallTalk').remove();
}

function smallTalk1(){
    var { start1, end1 } = { start1: "beach", end1: "a swim" };
    
    var h2 = document.createElement('h2');
    var textAnswer1 = document.createTextNode('She is gone to the ' + start1 + ' for ' + end1);
    h2.setAttribute('id','smallTalk1');
    h2.appendChild(textAnswer1);
    document.getElementById('flex-box-result1').appendChild(h2);

}
function reset1(){
    document.getElementById('smallTalk1').remove();
}



