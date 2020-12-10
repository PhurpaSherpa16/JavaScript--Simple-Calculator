function calc(val) {
    document.getElementById("display-result").value += val;
}

function solve() {
    let num = document.getElementById('display-result').value;
    let num2 = eval(num);
    document.getElementById('display-history').value = num;
    document.getElementById('display-result').value = num2.toFixed(3);
}

function clr() {
    document.getElementById('display-result').value = "";
    document.getElementById('display-history').value = "";
}