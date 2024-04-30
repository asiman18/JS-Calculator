function ustegel() {
    let Number1 = parseFloat(document.getElementById('Number1').value);
    let Number2 = parseFloat(document.getElementById('Number2').value);
    let netice = Number1 + Number2;
    document.getElementById('netice').innerHTML = "netice: " + netice;
}

function cixar() {
    let Number1 = parseFloat(document.getElementById('Number1').value);
    let Number2 = parseFloat(document.getElementById('Number2').value);
    let netice = Number1 - Number2;
    document.getElementById('netice').innerHTML = "netice: " + netice;
}

function vur() {
    let Number1 = parseFloat(document.getElementById('Number1').value);
    let Number2 = parseFloat(document.getElementById('Number2').value);
    let netice = Number1 * Number2;
    document.getElementById('netice').innerHTML = "netice: " + netice;
}

function bol() {
    let Number1 = parseFloat(document.getElementById('Number1').value);
    let Number2 = parseFloat(document.getElementById('Number2').value);
    if (Number2 !== 0) {
        let netice = Number1 / Number2;
        document.getElementById('netice').innerHTML = "netice: " + netice;
    } else {
        document.getElementById('netice').innerHTML = "Xeta sifira bolme yoxdur.";
    }
}
