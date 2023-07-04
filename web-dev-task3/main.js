var inunit;
function inpCel()
{
    inunit="C";
    document.getElementById("iu").innerHTML="Celcius";
}
function inpFah()
{
    inunit="F";
    document.getElementById("iu").innerHTML="Fahrenheit";
}
function inpKel()
{
    inunit="K";
    document.getElementById("iu").innerHTML="Kelvin";
}
var outunit;
function outCel()
{
    outunit="C";
    document.getElementById("ou").innerHTML="Celcius";
}
function outFah()
{
    outunit="F";
    document.getElementById("ou").innerHTML="Fahrenheit";
}
function outKel()
{
    outunit="K";
    document.getElementById("ou").innerHTML="Kelvin";
}

function convert()
{
    var intemp = parseFloat(document.getElementById("temp-input").value);
    var display;
    if (inunit=="C")
    {
        if (outunit=="C")
        {
            display=intemp;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="F")
        {
            display=(intemp*1.8)+32;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="K")
        {
            display=(intemp+273.15);
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
    }
    if (inunit=="F")
    {
        if (outunit=="C")
        {
            display=(intemp-32)/1.8;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="F")
        {
            display=intemp;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="K")
        {
            display=((intemp-32)/1.8)+273.15;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
    }
    if (inunit=="K")
    {
        if (outunit=="C")
        {
            display=(intemp-273.15);
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="F")
        {
            display=((intemp-273.15)*1.8)+32;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
        if (outunit=="K")
        {
            display=intemp;
            document.getElementById("outputs").innerHTML=display.toFixed(2);
        }
    }
}

