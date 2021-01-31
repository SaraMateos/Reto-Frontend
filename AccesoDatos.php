<?php

    $servername = "127.0.0.1";
    $username = "root";

    //Conexión a la base de datos:
    $link = @new mysqli($servername, $username, "api-reto");
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
        $miArray[$i]= array("id"=>$fila["id"],"nombre"=>utf8_encode($fila["nombre"]),"latitud"=>$fila["latitud"],"longitud"=>$fila["longitud"],"altitud"=>fila["altitud"], "temperatura"=>fila["temperatura"], "humedad"=>fila["humedad"], "viento"=>fila["viento"], "vientoMax"=>fila["vientoMax"], "vientoDir"=>fila["vientoDir"], "precipitacion"=>fila["precipitacion"]);
    }

    echo json_encode($miArray);

    mysqli_close($link);

?>