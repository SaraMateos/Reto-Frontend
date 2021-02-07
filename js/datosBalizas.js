//Genera datos random
function temperatura() {
    var num = Math.floor((Math.random() * 300) + 1) / 10;
    return "Temperatura: " + num + " ºC";
}

function humedad() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Humedad: " + num + " %";
}