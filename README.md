# PasswordGenerator

The main goal of this project is to create a random password generator using different methods and properties available in JavaScript. 

## Acceptance Criteria

* When the user clicks on the Generate Password button, It has to create a random password based on the user selected Criteria.
* The user will be prompted to enter the length of the password.
* The password has to be more than 8 characters and less than 128 characters in length.
* Then the user will have the ability to choose which type of characters to be used in the password generated.
* We can choose to have or not have lower case, upper case, numeric and/or special characters.
* Each of the selection has to be registered and then the password should be generated.
* The generated password should have atleast one letter which is in the selected character type criteria.

## Logic behind the Program

The critical part of the program is to have atleast one letter from the selected types of characters. In order to achieve this , there are two strings declared with names str1 , str 2. str1 has each word selected from each type of character selected, str2 has the random string with all the types of characters included in it.

The generated password will be displayed in the textbox

## Installation

You can install this project on your local machine by cloning the project using SSH Key by clicking [Here!](git@github.com:anurav18/PasswordGenerator.git)

## License

Unknown

* This project is created as a part of the BootCamp program organized by University of Washington.




