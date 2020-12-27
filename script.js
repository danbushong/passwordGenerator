// Assignment Code
generateBtn = document.querySelector("#generate");


//variables for letter/number/symbol/case
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

numberString = ["0","1","2","3","4","5","6","7","8","9"];

specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","=","+"];

allPossible = lowerCase.concat(upperCase , numberString , specialCharacter);

noUpperCase = numberString.concat(lowerCase , specialCharacter);

noNumbers = specialCharacter.concat(upperCase , lowerCase);

noSpecial = lowerCase.concat(upperCase , numberString);

lettersOnly = lowerCase.concat(upperCase);

numbersAndSpecialCharOnly = numberString.concat(specialCharacter);

numbersAndLowerCase = lowerCase.concat(numberString);

numbersAndUpperCase = numberString.concat(upperCase);

specialCharacterAndLowerCase = specialCharacter.concat(lowerCase);

specialCharacterAndUpperCase = specialCharacter.concat(upperCase);

//random number in variables with the random element below
randomNumberInAllPossible = Math.floor(Math.random()*allPossible.length);

var a = allPossible[randomNumberInAllPossible];


randomNumberInNoUpperCase = Math.floor(Math.random()*noUpperCase.length);

var b = noUpperCase[randomNumberInNoUpperCase]

randomNumberInNoNumbers = Math.floor(Math.random()*noNumbers.length);

var c = noNumbers[randomNumberInNoNumbers];

randomNumberInNoSpecial = Math.floor(Math.random()*noSpecial.length);

var d = noSpecial[randomNumberInNoSpecial];

randomNumberInLettersOnly = Math.floor(Math.random()*lettersOnly.length);

var e = lettersOnly[randomNumberInLettersOnly]


randomNumberInNumbersAndSpecialCharOnly = Math.floor(Math.random()*numbersAndSpecialCharOnly.length);

var f = numbersAndSpecialCharOnly[randomNumberInNumbersAndSpecialCharOnly];

randomNumberNumbersAndLowerCase = Math.floor(Math.random()*numbersAndLowerCase.length);

var g = numbersAndLowerCase[randomNumberNumbersAndLowerCase];

randomNumberNumbersAndUpperCase = Math.floor(Math.random()*numbersAndUpperCase.length);

var h = numbersAndUpperCase[randomNumberNumbersAndUpperCase];

randomNumberspecialCharacterAndLowerCase = Math.floor(Math.random()*specialCharacterAndLowerCase.length);

var i = specialCharacterAndLowerCase[randomNumberspecialCharacterAndLowerCase]


randomNumberspecialCharacterAndUpperCase = Math.floor(Math.random()*specialCharacterAndUpperCase.length);

var j = specialCharacterAndUpperCase[randomNumberspecialCharacterAndUpperCase];

randomNumberUpperCase = Math.floor(Math.random()*upperCase.length);

var k = upperCase.length[randomNumberUpperCase];


randomNumberNumberString = Math.floor(Math.random()*numberString.length);

var l = numberString.length[randomNumberNumberString];

randomNumberLowerCase = Math.floor(Math.random()*lowerCase.length);

var m = lowerCase[randomNumberLowerCase];


randomNumberSpecialCharacter = Math.floor(Math.random()*specialCharacter.length);

var n = specialCharacter[randomNumberSpecialCharacter];




function promptMe(){


  //first prompt
  userCharacterCountChoice = prompt("How many characters?");{}

    if (userCharacterCountChoice > 8 && userCharacterCountChoice < 128){
      alert("valid password length");

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
      specialCharacterChoice = confirm("Press ok, if you want special characters in your password. Press Cancel if you don't");{


       if (specialCharacterChoice === true){
         alert("good idea, that will make it hard to crack");
       }
       else {
         alert("smart, they just make things complicated");
       }

      }


     }
    else {
      alert("invalid password, make it between 8 and 128 characters");
    }
  }
  
  
  // if (specialCharacterChoice === true && numberChoice === true && upperCaseLetterChoice === true && lowerCaseLetterChoice === true){
    
  //   for(i = 0; i <= userCharacterCountChoice; i++){

  //     //getting a random character from allPossible
  //     finalPassword = finalPassword + allPossible.charAt(Math.floor(Math.random()* Math.floor(allPossible.length - 1)));
  //   }
    
   
  
  // }
//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

//   }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
