<?php

    $servername = "10.10.17.1";
    $username = "sara";
    $password = "sara";

    //Conexión a la base de datos:
    $link = @new mysqli($servername, $username, $password, "api-reto");
    if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
    }

    //Consulta
    $sql = "SELECT * from balizas";
    $resultado = $link->query($sql); 
    $filas=$resultado->num_rows;

    //Coge los datos de la tabla
    for ($i = 0; $i < $filas; $i++) {
        $fila = mysqli_fetch_array($resultado);
        $miArray[$i]= array("id"=>$fila["id"],"nombre"=>$fila["nombre"],"latitud"=>$fila["latitud"],"longitud"=>$fila["longitud"],"altitud"=>fila["altitud"]);
    }

    echo json_encode($miArray);

    mysqli_close($link);

?>