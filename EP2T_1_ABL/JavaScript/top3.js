//-----------------------------------------------------DECLARACIONES---//
let masTexto1 = document.getElementById('masTexto1');
let masTexto2 = document.getElementById('masTexto2');
let masTexto3 = document.getElementById('masTexto3');
let divT1 = document.getElementById('Lmas1');
let divT2 = document.getElementById('Lmas2');
let divT3 = document.getElementById('Lmas3');

    
function fmt1()
{
    if(masTexto1.style.opacity == '1')
    {
        masTexto1.style.opacity = '0';
        divT1.innerHTML = "Leer más...";
    }
    else if (masTexto1.style.opacity == '0')
    {
        masTexto1.style.opacity = '1';
        divT1.innerHTML = "Leer menos...";
    }
}

function fmt2()
{
    if(masTexto2.style.opacity == '1')
    {
        masTexto2.style.opacity = '0';
        divT2.innerHTML = "Leer más...";
    }
    else if (masTexto2.style.opacity == '0')
    {
        masTexto2.style.opacity = '1';
        divT2.innerHTML = "Leer menos...";
    }
}

function fmt3()
{
    if(masTexto3.style.opacity == '1')
    {
        masTexto3.style.opacity = '0';
        divT3.innerHTML = "Leer más...";
    }
    else if (masTexto3.style.opacity == '0')
    {
        masTexto3.style.opacity = '1';
        divT3.innerHTML = "Leer menos...";
    }
}