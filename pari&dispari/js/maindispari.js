//user choose number
let userInput = "";
let isEven = null;

//function for random number
function getRndNumber() {
    return Math.floor((Math.random() * 5) + 1);
};

//function for check if number is correct
function checkNumber(){
    userInput = document.getElementById("userInput");
    let userNumber = userInput.value;
    console.log(userNumber);

    if (userNumber > 6 || userNumber < 0 ){
        document.getElementById("message").innerHTML = "Inserisci un numero valido";
        return;
    } else  execute(userNumber);
    
};

//function for sum numbers

function execute(userNumber){
    if (isEven != null){

        checkEven(userNumber);
    } else console.log("scegli se pari o dispari");

};

function sum(userNumber){
    let generatedNumber =  getRndNumber();
    console.log('generatedNumber:' + generatedNumber);
    return parseInt(userNumber) + generatedNumber;

};

function checkEven(userNumber){
    let isEvenGenerated = true;
    let _sum = 0;
    _sum= sum(userNumber);
    console.log("sum:" + _sum);
    if (_sum % 2 == 0) {
        isEvenGenerated = true;
        checkWin(isEvenGenerated);
    } else {
        
        isEvenGenerated = false;
        checkWin(isEvenGenerated);
    } 
};

function checkWin(isEvenGenerated){
    if (isEvenGenerated == isEven){
        console.log("hai vinto");
    } else console.log("hai perso");
};



//button for even and button for odd

document.getElementById("evenButton").addEventListener("click", function(){
    isEven = true;
    console.log(isEven);
});

document.getElementById("oddButton").addEventListener("click", function(){
    isEven = false;
    console.log(isEven);
});


//button for the program start

document.getElementById("confirmButton").addEventListener("click", function(){
    checkNumber();
});

