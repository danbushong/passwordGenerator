

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
    
    if (specialCharacterChoice === true && numberChoice === true && upperCaseLetterChoice === true && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + allPossible.charAt(Math.floor(Math.random() * Math.floor(allPossible.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === true && upperCaseLetterChoice === false && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + noUpperCase.charAt(Math.floor(Math.random() * Math.floor(noUpperCase.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === false && upperCaseLetterChoice === true && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + noNumbers.charAt(Math.floor(Math.random() * Math.floor(noNumbers.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === true && upperCaseLetterChoice === true && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + noSpecial.charAt(Math.floor(Math.random() * Math.floor(noSpecial.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === false && upperCaseLetterChoice === true && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + lettersOnly.charAt(Math.floor(Math.random() * Math.floor(lettersOnly.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === true && upperCaseLetterChoice === false && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + numbersAndSpecialCharOnly.charAt(Math.floor(Math.random() * Math.floor(numbersAndSpecialCharOnly.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === true && upperCaseLetterChoice === false && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + numbersAndLowerCase.charAt(Math.floor(Math.random() * Math.floor(numbersAndLowerCase.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === true && upperCaseLetterChoice === true && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + numbersAndUpperCase.charAt(Math.floor(Math.random() * Math.floor(numbersAndUpperCase.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === false && upperCaseLetterChoice === false && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + specialCharacterAndLowerCase.charAt(Math.floor(Math.random() * Math.floor(specialCharacterAndLowerCase.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === false && upperCaseLetterChoice === true && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + specialCharacterAndUpperCase.charAt(Math.floor(Math.random() * Math.floor(specialCharacterAndUpperCase.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === false && upperCaseLetterChoice === false && lowerCaseLetterChoice === true){
        for(var i = 0; i < complexity; i++){
            password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === false && upperCaseLetterChoice === true && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length-1)));
        }


    }
    if (specialCharacterChoice === false && numberChoice === true && upperCaseLetterChoice === false && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + numberString.charAt(Math.floor(Math.random() * Math.floor(numberString.length-1)));
        }


    }
    if (specialCharacterChoice === true && numberChoice === false && upperCaseLetterChoice === false && lowerCaseLetterChoice === false){
        for(var i = 0; i < complexity; i++){
            password = password + specialCharacter.charAt(Math.floor(Math.random() * Math.floor(specialCharacter.length-1)));
        }


    }

        

    document.getElementById("password").value = password


  

}}