function paraClicked(){

    document.getElementById("abc").setAttribute("style","color:yellow");
}

function paraMouseOver(){

    document.getElementById("abc").setAttribute("style","color:blue");
}

document.getElementById("abc").addEventListener("click",paraClicked);
document.getElementById("abc").addEventListener("mouseover",paraMouseOver);

function buttonClick(){

    document.getElementById("b").setAttribute("style","color:pink");

}

function validateForm(){
    //check if name is added or not
    var name = document.getElementById("name");
    var phNo = document.getElementById("phno");
    
    if(name.value== ""){
        alert("please enter some value in Name");
    }

    if(!(isNaN(name.value))){
        alert("please enter some value in Name");
    }

    //phone no


    if((isNaN(phNo.value))){
        alert("please enter number in phone");
    }
}

