

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

// enter your id
function yourID(){
    var whatIsYourID = prompt('what is your id?');
    var YourIDIs = whatIsYourID;
    var h2 = document.createElement('h2');
    var IDAnswer = document.createTextNode('Your ID is ' + YourIDIs);
    h2.setAttribute('id2','yourID');
    h2.appendChild(IDAnswer);
    document.getElementById('flex-box-result2').appendChild(h2);

}
function resetID(){
    document.getElementById('yourID').remove();
}

// enter your first name
function yourName(){
    var whatIsYourName = prompt('what is your first name?');
    var YourNameIs = whatIsYourName;
    var h3 = document.createElement('h3');
    var NameAnswer = document.createTextNode('Your first name is ' + YourNameIs);
    h3.setAttribute('id3','yourName');
    h3.appendChild(NameAnswer);
    document.getElementById('flex-box-result3').appendChild(h3);

}
function resetName(){
    document.getElementById('yourName').remove();
}

// enter your last name
function lastName(){
    var whatIsYourLastName = prompt('what is your last name?');
    var YourLastNameIs = whatIsYourLastName;
    var h4 = document.createElement('h4');
    var LastNameAnswer = document.createTextNode('Your last name is ' + YourLastNameIs);
    h4.setAttribute('id4','lastName');
    h4.appendChild(LastNameAnswer);
    document.getElementById('flex-box-result4').appendChild(h4);

}
function resetlastName(){
    document.getElementById('lastName').remove();
}

// enter your salary
function salary(){
    var whatIsYoursalary = prompt('what is your salary?');
    var YoursalaryIs = whatIsYoursalary;
    var h5 = document.createElement('h5');
    var salaryAnswer = document.createTextNode('Your salary is ' + YoursalaryIs);
    h5.setAttribute('id5','salary');
    h5.appendChild(salaryAnswer);
    document.getElementById('flex-box-result5').appendChild(h5);

}
function resetSalary(){
    document.getElementById('salary').remove();
}