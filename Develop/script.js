// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// const randomFunction = {

// }
// Add prompt with following list of messages:
// the amount of characters
function characterAmount() {
    var confirmLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
    console.log(confirmLength);
    if (confirmLength < 8) {
        alert("Please choose a number larger than 7");
        return;
    };

    if (confirmLength > 128) {
        alert("Please choose a number smaller than 129");
        return;
    };
};

// special characters
function getRandomSymbol() {
    window.confirm("Would you like to add symbols?");
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

// lowercase characters
function getRandomLower() {
    window.confirm("Would you like to add lowercase characters?");
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// uppercase characters
function getRandomUpper() {
    window.confirm("Would you like to add uppercase characters?");
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// numbers
function getRandomNumber() {
    window.confirm("Would you like to add numbers?");
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(characterAmount());
console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomSymbol());
console.log(getRandomNumber());

// using Math.floor() rounds the number
// using Math.random() give a random decimal number
