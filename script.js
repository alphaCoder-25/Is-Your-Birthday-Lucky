const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");


function calaculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calaculateSum(dob);
    console.log(sum);
}

checkNumber.addEventListener("click", checkBirthDateIsLucky);