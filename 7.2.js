function Geld()
{
    var awnser = parseInt(window.document.getElementById("awnser").value, 10);

    if (awnser <60)
    {
        document.getElementById("antwoord").innerHTML = "je hebt te weining geld broke ass";
        console.log("skeer")
    }
    else{
        console.log('ai TOP G');
        document.getElementById('antwoord').innerHTML = "je hebt genoeg geld top g";
    }
}