var result = document.querySelector('#password');

var generate = document.querySelector('#generate')

var copyClip = document.querySelector('#copyClip')



var randomChoice = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
};

generate.addEventListener('click', )

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