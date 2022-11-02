function Geld()
{
var budget = 10;
var product = 60;

if (budget >60) {
    test = 'U heeft genoeg geld!';
    console.log('U heeft genoeg geld!');
    document.getElementById('test').innerHTML = test;
} else{
    test = 'Helaas heeft u, te weinig geld';
    console.log('Helaas heeft u, te weinig geld');
    document.getElementById('test').innerHTML = test;
}
}
