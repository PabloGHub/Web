function fmt(Lmas, masTexto)
{
    console.log("ME QUIERO MORIRRRRR");
    if(document.getElementById(masTexto).style.opacity == '1')
    {
        document.getElementById(masTexto).style.opacity = '0';
        document.getElementById(Lmas).innerHTML = "Leer más...";
    }
    else if (document.getElementById(masTexto).style.opacity == '0')
    {
        document.getElementById(masTexto).style.opacity = '1';
        document.getElementById(Lmas).innerHTML = "Leer menos...";
    }
}