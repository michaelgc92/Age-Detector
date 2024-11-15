const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;

myButton.onclick = function(){

    age = myText.value;
    age = Number(age);



    if(age >= 100){
        resultElement.textContent = ("You are TOO OLD to enter this site....go to bed.");
    }
    else if(age == 0){
        resultElement.textContent = ("Weren't you just born?? You definitly can't enter this site.");
    }
    else if(age >= 18){
        resultElement.textContent = ("You can enter this site youngblood.");
    }
    else if(age < 0){
        resultElement.textContent = ("Your age can't be below 0.");
    }
    else{
        resultElement.textContent = ("You must be 18+ to enter this site.");
    }
}    