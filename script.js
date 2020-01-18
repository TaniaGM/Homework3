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

