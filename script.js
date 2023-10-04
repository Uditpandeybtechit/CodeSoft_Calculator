let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
    if (e.target.innerHTML     == "=") {
    string=eval(string);
    document.querySelector('input').value=string;

    }
    else if(e.target.innerHTML=="C"){
        string=""
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="DE"){
        string=string.slice(0,-1);
        document.querySelector('input').value=string;
    }
    else{

        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }

    })
})
function myFunction() {

    document.getElementById("submit").style.backgroundColor = "white";
    let element=document.body;
    element.style.backgroundColor="black";
    document.getElementById("container").style.backgroundColor = "rgb(216, 211, 211)";
    document.getElementById("input").style.backgroundColor = "black";
    document.getElementById("calc").style.color = "black";
    document.getElementById("cid").style.backgroundColor="black";
    document.getElementById("del").style.backgroundColor="black";
    document.getElementById("per").style.backgroundColor="black";
    let elem=document.getElementsByTagName("button");
    elem[4].style.backgroundColor="white"; 
    elem[5].style.backgroundColor="white";
    elem[6].style.backgroundColor="white";
    elem[8].style.backgroundColor="white";
    elem[9].style.backgroundColor="white";
    elem[10].style.backgroundColor="white";
    elem[12].style.backgroundColor="white";
    elem[13].style.backgroundColor="white";
    elem[14].style.backgroundColor="white";
    elem[16].style.backgroundColor="white";
    elem[17].style.backgroundColor="white";
    elem[18].style.backgroundColor="white";
    elem[19].style.backgroundColor="black";
    let elem2=document.getElementsByTagName("input");
    elem2[0].style.color="white";
    
   
}
