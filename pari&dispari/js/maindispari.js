//user choose number
let userInput = document.getElementById(userInput);

//function for random number
function getRndNumber() {
    return Math.floor((Math.random() * 5) + 1);
};

//create a variable for a random number
let generatedNumber =  getRndNumber();
console.log(generatedNumber);

//function for check if number is correct
function checkNumber(){

    let userNumber = userInput.value;
    if (userNumber > 6 || userNumber < 0 ){
        document.getElementById("message").innerHTML = "Inserisci un numero valido";
        return true;
    } else return false;
    
};

//button for even and button for odd

let isEven = true;
document.getElementById("evenButton").addEventListener("click", function(){
    isEven = true;
});

document.getElementById("oddButton").addEventListener("click", function(){
    isEven = false;
});


//button for the program start


