

// Write password to the #password input
function generate() {

    
    let complexity = prompt("How many characters?");

    if (complexity > 8 && complexity < 128){
        alert("valid password length"); 
    }
    else{
        alert("length must be between 8 and 128. Please reload the page");
    }

    let lowerCaseLetterChoice = confirm("Press ok, if you want lowercase letters. Press Cancel if you don't");

    if (lowerCaseLetterChoice === true){
        alert("Cool we will use them");
    }
    else {
        alert("Ok we will not use those");
    }


    let upperCaseLetterChoice = confirm("Press ok, you want uppercase letters. Press Cancel if you don't");

    if (upperCaseLetterChoice === true){
      alert("awesome, we will use those");
    }
    else {
      alert("understandable, no one likes uppercase letters anyways");
    }

    let numberChoice = confirm("Press ok, if you want numbers in your password. Press Cancel if you don't");

    if (numberChoice === true){
      alert("good idea, numbers are great in passwords");
    }
    else {
        alert("numbers are lame anyways");
    }

    let specialCharacterChoice = confirm("Press ok, if you want special characters in your password. Press Cancel if you don't");{


    if (specialCharacterChoice === true){
      alert("good idea, that will make it hard to crack");
    }
    else {
        alert("smart, they just make things complicated");
    }

    let lowerCase = "abcdefghijklmnopqrstuvwxyz";

    let upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let numberString= "0123456789";

    let specialCharacter= "!@#$%^&*()_=+-";

    let allPossible = lowerCase.concat(upperCase , numberString , specialCharacter);

    let noUpperCase = numberString.concat(lowerCase , specialCharacter);

    let noNumbers = specialCharacter.concat(upperCase , lowerCase);

    let noSpecial = lowerCase.concat(upperCase , numberString);

    let lettersOnly = lowerCase.concat(upperCase);

    let numbersAndSpecialCharOnly = numberString.concat(specialCharacter);

    let numbersAndLowerCase = lowerCase.concat(numberString);

    let numbersAndUpperCase = numberString.concat(upperCase);

    let specialCharacterAndLowerCase = specialCharacter.concat(lowerCase);

    let specialCharacterAndUpperCase = specialCharacter.concat(upperCase);

    let password = ""

    for(var i = 0; i <= complexity; i++){
        password = password + lettersOnly.charAt(Math.floor(Math.random() * Math.floor(lettersOnly.length-1)));
    }

    document.getElementById("password").value = password


  

}}