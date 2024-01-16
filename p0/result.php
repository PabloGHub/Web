<?php
//---Clientes
$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
$mail = $_GET["email"];
$tel = $_GET["telefono"];
echo "Nombre: " . $nombre . "<br> Apellidos:   " . $apellido . "<br> Mails:   " . $mail . "<br> Teléfono:   " . $tel;

echo "<br> <hr> <br>";

//---Empresa
$nombre_empresa = $_GET["nombre-empresa"];
$web = $_GET["ulr-empresa"];
$tamaño_empresa = $_GET["empresa"];
echo "Nombre de la Empresa:   " . $nombre_empresa . "<br> Webs:   " . $web . "<br> Tamaño de la Empresa:   " . $tamaño_empresa;

//---Momento radius
//$tamaño1 = $_GET["Tamaño_empresa"];
//echo "<br>" . $tamaño1 . "<br>";

echo "<br> <hr> <br>";

//---Proyecto
$tipo_poryecto = $_GET["proyectos"];
$descripcion = $_GET["descripcion"];
$fecha_entrega = $_GET["entrega"];
$presupuesto = $_GET["presupuesto"];
echo "Tipo de Proyecto:   " . $tipo_poryecto . "<br> Descripcion:   " . $descripcion . "<br> Fecha de Entrega:   " . $fecha_entrega . "<br> Presupuesto:   " . $presupuesto;


//echo $_GET[""]


?>