var secondes       = 00;
var tens           = 00;
var appendTens     = document.getElementById("tens");
var appendSecondes = document.getElementById("secondes");
var buttonStart    = document.getElementById("button-start");
var buttonStop     = document.getElementById("button-stop");
var buttonReset    = document.getElementById("button-reset");
var interval;

function startTimer() {
    tens++;

    if(tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        secondes++;
        appendSecondes.innerHTML = "0" + secondes;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (secondes > 9) {
        appendSecondes.innerHTML = secondes;
    }
}

buttonStart.onclick = function() {
    interval = setInterval(startTimer);
};

buttonStop.onclick = function() {
    clearInterval(interval);
};

buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    secondes = "00";
    appendSecondes.innerHTML = secondes;
    appendTens.innerHTML = tens;
}