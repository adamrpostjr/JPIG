function plus(el) {
    var special = document.getElementById(el).innerText
    if (special != 10) {
        var number = parseInt(special, 10) + 1
        console.log(number);
        document.getElementById(el).innerText = number
    }
}
function minus(el) {
    var special = document.getElementById(el).innerText
    if (special != 1) {
        var number = parseInt(special, 10) - 1
        console.log(number);
        document.getElementById(el).innerText = number
    }
}


function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied the text: " + text);
}

async function displayPass() {
    var password = document.getElementById('genPass')
    var caps = document.getElementById('A-Z').checked;
    var lower = document.getElementById('a-z').checked;
    var number = document.getElementById('0-9').checked;
    var special = document.getElementById('special').checked;
    var minNumber = parseInt(document.getElementById('num').innerText, 10)
    var minSpecial =  parseInt(document.getElementById('spec').innerText, 10)
    
    let generatedPassword = await mainProcess.createPassword(true,lower,number,special,minNumber,minSpecial);
    password.innerText = generatedPassword
}

