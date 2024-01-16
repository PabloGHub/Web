let DescargasMeses = document.getElementById("DesMes");


function act(value)
{
    console.log(value);
    DescargasMeses.innerHTML = value;
}

//------------------------( Reloj )---//
window.setInterval(function ()
{
    act();
}, 1000);



function act()
{
    var Hoy = new Date();
    var tLimite = new Date('2023/12/31/23:59:59');

    var tFaltante = tLimite - Hoy;


    // D = dias | H = horas | M = minutos | S = segundos //
    var D = Math.floor(tFaltante / (1000 * 60 * 60 * 24));
    var H = Math.floor((tFaltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var M = Math.floor((tFaltante % (1000 * 60 * 60)) / (1000 * 60));
    var S = Math.floor((tFaltante % (1000 * 60)) / 1000);


    if (S >= 0)
    {
        document.getElementById("dia").innerHTML = D + " Días"
        document.getElementById("hora").innerHTML = H + "h " + M + "' " + S + '"'
    } else {
        document.getElementById("dia").innerHTML = ""
        document.getElementById("hora").innerHTML = ""
    }
};

/*
//ponemos para que la funcio se repita una vez por segundo
setInterval(cronos, 1000);

function cronos() {
    // Fecha de inicio y final
    var ahora = new Date(),
        fechaFinal = new Date('2023/11/30/10:29:00');
    // Encuentra la diferencia entre ahora y la fecha de finalización
    var diferencia = fechaFinal - ahora;

    // Calcula el tiempo para días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    if (segundos >= 0) {
        // Escribimos los resultados en los dos divs
        document.getElementById("dias").innerHTML = dias + " Días"
        document.getElementById("horas").innerHTML = horas + "h " + minutos + "' " + segundos + '"'
    } else {
        document.getElementById("dias").innerHTML = ""
        document.getElementById("horas").innerHTML = ""
    }
};
*/