// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input


function promptMe(){
  //first prompt
  userCharacterCountChoice = prompt("How many characters?");

    if (userCharacterCountChoice > 8 && userCharacterCountChoice < 128){
      alert("valid password length")

      //asking is lower case letters should be used
      lowerCaseLetterChoice = confirm("Do you want lowercase letters?");

        if (lowerCaseLetterChoice === true){
          alert("Cool we will use them");
        }
        else {
          alert("Ok we will not use those");
        }
      
      



    }
    else{
      console.log("invalid password")
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
