

function plus()
{
var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

if (getal1 == 0 || getal2 ==0)
{
    document.getElementById("antwoord").innerHTML = "de cijfer moet boven de nul zijn";
    console.log("ze reken je niet megol")
}
else{
    antwoord = getal1 + getal2;
    console.log('plus');
    document.getElementById('antwoord').innerHTML = antwoord;
}
}


function min()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    if (getal1 == 0 || getal2 ==0)
    {
        document.getElementById("antwoord").innerHTML = "de cijfer moet boven de nul zijn";
        console.log("ze reken je niet megol")
    }
    else{
        antwoord = getal1 - getal2;
        console.log('plus');
        document.getElementById('antwoord').innerHTML = antwoord;
    }
}

function keer()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    if (getal1 == 0 || getal2 ==0)
    {
        document.getElementById("antwoord").innerHTML = "de cijfer moet boven de nul zijn";
        console.log("ze reken je niet megol")
    }
    else{
        antwoord = getal1 * getal2;
        console.log('plus');
        document.getElementById('antwoord').innerHTML = antwoord;
    }
}

function delen()
{
    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);

    if (getal1 == 0 || getal2 ==0)
    {
        document.getElementById("antwoord").innerHTML = "de cijfer moet boven de nul zijn";
        console.log("ze reken je niet megol")
    }
    else{
        antwoord = getal1 / getal2;
        console.log('plus');
        document.getElementById('antwoord').innerHTML = antwoord;
    }
}
