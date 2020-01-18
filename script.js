//Creating DOM files for html

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercasetEl = document.getElementById('uppercase');
const lowercasetEl = document.getElementById('lowercase');
const numberstEl = document.getElementById('numbers');
const symboltEl = document.getElementById('symbols');
const generatetEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const randomCollection = { lower: getRandomLower, upper: getRandomUpper, number: getRandomNumber, symbol: getRandomSymbol }

//adding Event Listeners

/*
clipboard.addEventListener('click', () => {
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


generate.addEventListener('click',() => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//adding function codes

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    
    }
}
//looping
for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
        const randomCollection = Object.keys(type)[0];
        generatedPassword += randomCollection[randomCollection]
        ();
    });
}
const finalPassword = generatedPassword.slice(0,length);
return finalPassword;
}

// Grabbing upper and lower case letters from character set

function getRandomUpper() {}

    return String.fromCharCode(Math.floor(math.Random()) *26 + 65)
}
 console.log(String.fromCharCode(97));

function getRandomLower(){}

console.log(String.fromCharCode(99));

/*
    return String.fromCharCode(Math.floor(math.Random()) *26 + 97);
}

function getRandomNumber(){
    return +String.fromCharCode(Math.floor(math.Random()) *10 +  48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()_+{}|:<>?-=[]\;,./'
    return symbols[Math.floor(Math.random() * symbols.length)];
}



*/
