// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input


function promptMe(){
  //first prompt
  userCharacterCountChoice = prompt("How many characters?");

    if (userCharacterCountChoice > 8 && userCharacterCountChoice < 128){
      alert("valid password length")

      //asking is lower case letters should be used
      lowerCaseLetterChoice = confirm("Press ok, if you want lowercase letters. Press Cancel if you don't");

        if (lowerCaseLetterChoice === true){
          alert("Cool we will use them");
        }
        else {
          alert("Ok we will not use those");
        }
       //asking if upper case letters should be used
      upperCaseLetterChoice = confirm("Press ok, you want uppercase letters. Press Cancel if you don't");

        if (upperCaseLetterChoice === true){
          alert("awesome, we will use those");
        }
        else {
          alert("understandable, no one likes uppercase letters anyways");
        }
       //asking if numbers should be used
      numberChoice = confirm("Press ok, if you want numbers in your password. Press Cancel if you don't");

        if (numberChoice === true){
          alert("good idea, numbers are great in passwords");
        }
        else {
          alert("numbers are lame anyways");
        }
       //asking if special characters should be used
      specialCharacterChoice = confirm("Press ok, if you want special characters in your password. Press Cancel if you don't");

       if (specialCharacterChoice === true){
         alert("good idea, that will make it hard to crack");
       }
       else {
         alert("smart, they just make things complicated");
       }
      



    }
    else{
      alert("invalid password, make it between 8 and 128 characters")
    }

  //all the variables I could think of

  // lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // numberString = ["0","1","2","3","4","5","6","7","8","9"];

  // specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","=","+"];

  // allPossible = (lowerCase + upperCase + numberString + specialCharacter);

  // noUpperCase = (allPossible - upperCase);

  // noNumbers = (allPossible - numberString);

  // noSpecial = (allPossible - specialCharacter);

  // lettersOnly = (lowerCase + UpperCase);

  // numbersAndSpecialCharOnly = (numberString + specialCharacter);

  // numbersAndLowerCase = (lowerCase + numberString);

  // numbersAndUpperCase = (numberString + upperCase);

  // specialCharacterAndLowerCase = (specialCharacter + lowerCase);

  // specialCharacterAndUpperCase = (specialCharacter + upperCase);

  

  
}







  
  


  




//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

//   }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
