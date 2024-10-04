// HOVER TO (SECOND)
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");    
    buttons.forEach(button => {
        button.addEventListener("touchstart", function() {
            button.classList.add("hover");
            
            setTimeout(function() {
                button.classList.remove("hover");
            }, 200); //seconds
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn3");    
    buttons.forEach(button => {
        button.addEventListener("touchstart", function() {
            button.classList.add("hover");
            
            setTimeout(function() {
                button.classList.remove("hover");
            }, 200); //seconds
        });
    });
});


// FAKE CALCULATOR
function appendToResult(value) {
    var resultBox = document.getElementById("result");
    if (resultBox.innerHTML === '0' && value !== '.') {
        resultBox.innerHTML = value;
    } else {
        resultBox.innerHTML += value;
    }
}
const calculateMe = document.getElementById('equalFakeCalculator');
calculateMe.addEventListener('click', function() {
    const valueN = document.getElementById('inputInputCalculator').value;
    const resultN = document.getElementById('result');
    if (valueN === '') {
        resultN.innerHTML = '(ᗒᗣᗕ)՞';
    } else {
        resultN.innerHTML = valueN;
    }
});
function removeAll() {
    document.getElementById("result").innerHTML = '';
}
function erase() {
    var resultBox = document.getElementById("result");
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
}


// BUTTON OPEN and CLOSE TO CALCULATOR FAKE
document.getElementById('curlyButtonCalculatorHidden').onclick = () => {
    document.getElementById('info').style.display = 'flex';
}
document.getElementById('fakeButton-Send').onclick = () => {
    document.getElementById('info').style.display = 'none';
}

// BUTTON CALCULATOR (SEND & RESET)
document.getElementById('fakeButton-Reset').onclick = () => {
    document.getElementById('inputInputCalculator').value = '';
}


