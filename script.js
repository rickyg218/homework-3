// Assignment Code
var generateBtn = document.querySelector("#generateBtn");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZY".split("");
var Nums = "0123456789".split("");
var specialChar = "!@#$%^&*()_+={[}}#".split("");





function generatePassword() {
    var posibbleChar = [];
    alert("Let's Generate a password");
    var userPass = prompt("Please enter password length. Only choose between 8 and 128 please.");
    var userLowerCase = confirm("Would you like your password to contain Lowercase Letters");
    var userUpperCase = confirm("Would you like your password to contain Uppercase Letters");
    var numeric = confirm("Would you like your password to contain numbers?");
    var specChar = confirm("Would you like your password to contain special Characters");

    if (userPass) {
        while (userPass <= 8 || userPass >= 128) {
            prompt("please enter password length")
        }
    }
    if (numeric) {
        posibbleChar = posibbleChar.concat(Nums);
        console.log(posibbleChar);
    }
    if (specChar) {
        posibbleChar = posibbleChar.concat(specialChar);
        console.log(posibbleChar);
    }

    if (userLowerCase) {
        posibbleChar = posibbleChar.concat(lowerCase);
        console.log(posibbleChar);
    }

    if (userUpperCase) {
        posibbleChar = posibbleChar.concat(upperCase);
        console.log(posibbleChar);
    }
    var newPass = ""
    for (var i = 0; i < userPass; i++) {
        char = posibbleChar[Math.floor(Math.random() * posibbleChar.length)]
        newPass += char
    }

    return newPass
}
// prompt ("lets generate a password");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}





generateBtn.addEventListener("click", writePassword);


