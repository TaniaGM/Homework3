// Grabbing upper and lower case letters from character set

function getRandomUpper() {
    return String.fromCharCode(Math.floor(math.Random()) *26 + 65)
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(math.Random()) *26 + 97);
}

function getRandomNumber(){
    return +String.fromCharCode(Math.floor(math.Random()) *10 +  48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()_+{}|:<>?-=[]\;,./'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//Creating DOM files for html

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercasetEl = document.getElementById('uppercase');
const lowercasetEl = document.getElementById('lowercase');
const numberstEl = document.getElementById('numbers');
const symboltEl = document.getElementById('symbol');
const generatetEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const randomCollection = {lower: getRandomLower, upper: getRandomUpper, number: getRandomNumber, symbol: getRandomSymbol}

//adding Event Listeners

clipboardEl.addEventListener('click', () => {
    const genpwd = document.createElement('genpwd');
    const password = resultEl.innerText;
    if(!password) { return; }

    genpwd.value=password;
    document.body.appendChild(genpwd);
    genpwd.select();
    document.execCommand('copy');
    genpwd.remove();
    alert('Password copied to clipboard');
});

generatetEl.addEventListener('click',() => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbercaseEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//adding function codes

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [lower, upper, number, symbol].filter(item =>Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    
    }
}
