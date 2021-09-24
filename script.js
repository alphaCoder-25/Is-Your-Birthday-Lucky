const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputDiv = document.querySelector("#output-div");


function calaculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0 ){
        outputDiv.innerText = "Your Birthday is Lucky🎉";
    } else {
        outputDiv.innerText = "Your Birthday is not Lucky🤕";
    }
};

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calaculateSum(dob);
    if( dob && luckyNumber == '') {
    compareValues(sum,luckyNumber.value);
    } else {
        outputDiv.innerText = "Please enter both the Fields😡"
    }
}

checkNumber.addEventListener("click", checkBirthDateIsLucky);