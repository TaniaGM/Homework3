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
}ß

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercasetEl = document.getElementById('uppercase');
const lowercasetEl = document.getElementById('lowercase');
const numberstEl = document.getElementById('numbers');
const resultEl = document.getElementById('result');
const resultEl = document.getElementById('result');
const resultEl = document.getElementById('result');
