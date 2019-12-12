var result = document.querySelector('#password');
var generate = document.querySelector('#generate');
var copyClip = document.querySelector('#copyClip');
var lengthEl = document.querySelector('#passl');
var lowercaseEl = document.querySelector('#lowercase');
var uppercaseEl = document.querySelector('#uppercase');
var numbersEl = document.querySelector('#number');
var symbolsEl = document.querySelector('#symbol')


var randomChoice = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
};

result.innerText = generate.addEventListener('click', function motion() {
    
    var  length = +lengthEl.value;
    var  hasLower = lowercaseEl.checked;
    var  hasUpper = uppercaseEl.checked;
    var  hasNumber = numbersEl.checked;
    var  hasSymbol = symbolsEl.checked;
    
    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);     
});



function getRandomLower() {
    
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomUpper() {
    
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
    
}

function getRandomNumber() {

    var numbers = "1234567890";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {

    var symbols = "!@#$%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];

}







console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomUpper());
console.log(getRandomSymbol());