// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Make a global scope
function generatePassword() {
    // the amount of characters
    function getPasswordLength() {
        var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
        console.log(passwordLength);
        if (passwordLength < 8) {
            alert("Please choose a number larger than 7");
            return;
        };
        if (passwordLength > 128) {
            alert("Please choose a number smaller than 129");
            return;
        };
        return passwordLength; 
    };
    // special characters
    function shouldUseRandomSymbols() {
        var shouldUseRandomSymbols = window.confirm("Would you like to add symbols?");
        return shouldUseRandomSymbols;
    };
    // lowercase characters
    function shouldUseRandomLowercase() {
        var shouldUseRandomLowercase = window.confirm("Would you like to add lowercase characters?");
        return shouldUseRandomLowercase;
    };
    // uppercase characters
    function shouldUseRandomUppercase() {
        var shouldUseRandomUppercase = window.confirm("Would you like to add uppercase characters?");
        return shouldUseRandomUppercase;
    };
    // numbers
    function shouldUseRandomNumber() {
        var shouldUseRandomNumber = window.confirm("Would you like to add numbers?");
        return shouldUseRandomNumber;
    };

    var passwordLength = getPasswordLength();
    var shouldUseSpecialCharacters = shouldUseRandomSymbols();
    var shouldUseLowerCase = shouldUseRandomLowercase();
    var shouldUseUpperCase = shouldUseRandomUppercase();
    var shouldUseNumbers = shouldUseRandomNumber();

    var passwordCharacters = [];
    var newPassword = "";

    if (shouldUseSpecialCharacters) {
        passwordCharacters.push("!@#$%^&*(){}[]=<>/,.|~?")
    } else if (shouldUseLowerCase) {
        passwordCharacters.push("abcdefghijklmnopqrstuvwxyz")
    } else if (shouldUseUpperCase) {
        passwordCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    } else if (shouldUseNumbers) {
        passwordCharacters.push("1234567890")
    }

    console.log(passwordCharacters);

    for (let i = 0; i < newPassword.length; i++) {
        newPassword += passwordCharacters.charAt[Math.floor(Math.random() * passwordLength)];
    }
    return newPassword;
};

// need to make an object to store user inputs.
// make the function run properly if the user hits cancel for some of the options.
// be able to run the function when the user presses the generate button.
// need to be able to see the generated password in the box.