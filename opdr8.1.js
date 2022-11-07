function plus()
{
var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    antwoord = getal1 + getal2;
    console.log('plus');
    document.getElementById('antwoord').innerHTML = antwoord;
}

function min()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    antwoord = getal1 - getal2;
    console.log('min');
    document.getElementById('antwoord').innerHTML = antwoord;
}

function keer()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    antwoord = getal1 * getal2;
    console.log('keer');
    document.getElementById('antwoord').innerHTML = antwoord;
}

function delen()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    antwoord = getal1 / getal2;
    console.log('delen');
    document.getElementById('antwoord').innerHTML = antwoord;
}
