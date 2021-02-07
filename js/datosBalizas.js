//Genera datos random
function temperatura() {
    var num = Math.floor((Math.random() * 300) + 1) / 10;
    return "Temperatura: " + num + " ºC";
}

function humedad() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Humedad: " + num + " %";
}

function viento() {
    var num = Math.floor((Math.random() * 149) + 1);
    return "Viento: " + num + " km/h";
}

function precipitaciones() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Precipitacion: " + num + " %";
}