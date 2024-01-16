//---------------------------------------------------( Declaraciones )---//
let Portada = document.getElementById("Portada");
// console.log(Portada);
var t = 0; // t de Tiempo
var enlaces = 0, intentoEnlace = 0;
var nPortada = Math.round(Math.random() * (3 - 1) + 1);
// Math.round(Math.random() * (max - min) + min);


//------------------------( Reloj )---//
window.setInterval(function()
{
    Pcambiar();
    alerta();
    t++;
},1000);


function Pcambiar()
{
    if (t%5 == 0) // Solo si es 5 //
    {
        // console.log("Valor de Tiempo: " + t)
        Portada.src = 'carrusel';

        switch(nPortada)
        {
            //---------( CAMBIAR A PORTADA 1 )---//
            case 1:
                nPortada = 2;
                Portada.src += '/1.png';
            break;

            //---------( CAMBIAR A PORTADA 2 )---//
            case 2:
                nPortada = 3;
                Portada.src += '/2.png';
            break;

            //---------( CAMBIAR A PORTADA 3 )---//
            case 3:
                nPortada = 1;
                Portada.src += '/3.png';
            break;
        }
    }
}


function alerta()
{
    if (t == 15)
    {
        enlaces = document.getElementsByTagName("a").length;
        // console.log(enlaces);

        intentoEnlace = prompt("¿Cuátos enlaces cres que tiene esta página?");
        // console.log(intentoEnlace);

        switch(intentoEnlace)
        {
            //---------( COMPROBAR SI ACERITO )---//
            case enlaces + "":
                alert("Muy bien, has acertado tiene " + enlaces + " enlaces");
            break;


            //---------( COMPROBAR SI NO QUIERE RESPONDER )---//
            case null:
                alert("Vale, ya lo pillo. No te apetece contestar... Otra vez será...");
            break;


            //---------( COMPROBAR SI PULSO ENVIAR SIN RELLENAR )---//
            case "":
                alert("Pruebe a rellenarlo");
                alerta();
            break;


            //---------( COMPROBAR SI FALLO )---//
            default:
                alert("Ups...me temo que te has equivocado hay " + enlaces + " enlaces. Más suerte la próxima vez...");
            break;

        }
    }
}