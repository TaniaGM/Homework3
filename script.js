//Creating DOM files for html

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const randomFunc = { 
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol }

//adding Event Listeners

generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    if (isNaN(length) || length < 8 || length > 128) {
        window.alert("Requested password length not within guidelines!");
    }
    else {

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);}
});


clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return; }

    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});

//adding function codes

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

    if(typesCount === 0) {
        window.alert("You must select at least one element to construct the password!");
        return '';
    
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
    });

    }
 
console.log(generatedPassword);
    const finalPassword = generatedPassword.slice(0,length);
    console.log(finalPassword);
    return finalPassword;

}


//setting cases for generated password (upper, lower, numbers, symbols)

function getRandomUpper() {
    const Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return Uppercase[Math.floor(Math.random() * Uppercase.length)];

}
 function getRandomLower(){
     const Lowercase = 'abcdefghijklmnopqrstuvwxyz'
    return Lowercase[Math.floor(Math.random() * Lowercase.length)];

}

function getRandomNumber(){
    const Numbers = '0123456789'
    return Numbers[Math.floor(Math.random() * Numbers.length)];
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()_+{}|:<>?-=[]\;,./'
    return symbols[Math.floor(Math.random() * symbols.length)];
}