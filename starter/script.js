// Array of special characters to be included in password
const keys = {
  upperCasedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCasedCharacters: "abcdefhijklmnopqrstuvwxyz",
  numericCharacters: "0123456789",
  specialCharacters: "@$%^&*!'./,(){}[]?="
}
/*
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
specialCharacters.toString()

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
numericCharacters.toString()

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

lowerCasedCharacters.toString()

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  
  'X',
  'Y',
  'Z'
];
upperCasedCharacters.toString()

*/

// Function to prompt user for password options
var pwChar = "";
function getPasswordOptions() {
  var pwlength = Number(prompt("Please enter a password length between 10 and 64 characters"));
  pwlength = parseInt(pwlength);

  if (pwlength < 10) {
    alert("Your password length must be 10 characters or more!");
    return "";
  } 
  
  if (pwlength > 64) {
    alert("Your password length must be 64 characters or less!");
    return "";
  }
  // confirming if the uppercase letters are required
  var upper = confirm("Would you like your password to have uppercase letters?");
  if (upper) {
    pwChar += upperCasedCharacters;
  }
  //creating prompts for the other password options
  var lower = confirm("Would you like your password to have lowercase letters?");
  if (lower) {
    pwChar += lowerCasedCharacters;
  }
  // numerical values confirmation
  var num = confirm("Would you like your password to have numbers?");
  if (num) {
    pwChar += numericCharacters;
  }
  // special chars confirmation
  var special = confirm("Would you like your password to have special characters?");
  if (special) {
    pwChar += specialCharacters;
  }

  // for (var i = 0; i < pwlength; i++) {
  //   password = pwChar[Math.floor(Math.random() * pwChar.length)]
  // }

}

// Function for getting a random element from an array
// function getRandom(arr) {

// }
const getRandom = [
  function upperCasedCharacters() {
    return keys.upperCasedCharacters[Math.floor(Math.random() * keys.upperCasedCharacters.length)];
  },
  function lowerCasedCharacters() {
    return keys.lowerCasedCharacters[Math.floor(Math.random() * keys.lowerCasedCharacters.length)];
  },
  function numericCharacters() {
    return keys.numericCharacters[Math.floor(Math.random() * keys.numericCharacters.length)];
  },
  function specialCharacters() {
    return keys.specialCharacters[Math.floor(Math.random() * keys.specialCharacters.length)];
  }
];


// Function to generate password with user input
function generatePassword() {
  return "Generated password"

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  var password = "";
  let charAdd = getRandom[Math.floor(Math.random() * getRandom.length)];
    if (getPasswordOptions === true) {
      password += charAdd();
    }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);