///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword()
  {
    //Gathering the user Inputs for Password Generation
    var length = prompt("choose a length of at least 8 characters and no more than 128 characters");

    //Making sure the length satisfies the criteria
    while(length <8 || length>128)
    {
      var length = prompt ("Please enter the correct length again");
    }
    var upperCase = confirm("Do you want to use an upper case character?");
    var lowerCase = confirm("Do you want to use a lower case character?");
    var numeric = confirm("Do you want to use numerics?");
    var specialChar = confirm("Do you want to use special characters?");
    var userInputs = [upperCase, lowerCase, numeric, specialChar];

    //Creating different strings with all possible characters included
    var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseStr = upperCaseStr.toLowerCase();
    var numericStr = "1234567890";
    var specialCharStr = "@!#$%^&*()";
    var possibleCases = [upperCaseStr,lowerCaseStr,numericStr, specialCharStr];
    var str1='';
    var str2='';
    var totalStr='';

   if(!(upperCase === false && lowerCase === false && numeric === false && specialChar === false))
   {
    for(var i = 0 ; i < possibleCases.length ; i++)
        {
          if(userInputs[i] === true)
          {
            str1 += possibleCases[i].charAt(Math.floor((Math.random()*possibleCases[i].length)));
            totalStr += possibleCases[i];
          }
       }  
    for(var j =0; j<length-str1.length; j++)
        {
          str2 +=  totalStr.charAt(Math.floor((Math.random()*totalStr.length)));
          
        }  
   }
   else
   {
     alert("Please choose atleast one type of character to form the password string");
     location.reload();
   }

      return str1+str2;
    }
  
passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
