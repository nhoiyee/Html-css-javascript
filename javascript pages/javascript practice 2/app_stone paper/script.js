//challenge 1 = your age in days

function ageInDays(){
    var birthYear = prompt('what year were you born?');
    var ageInDayss = (2020-birthYear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}

// cat
function generateCat(){
    var image =document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/l0NwSy7RHwyQi8tji/giphy.gif";
    div.appendChild(image);
    
}

function resetCat(){
    document.getElementById('generateCat').remove();
}