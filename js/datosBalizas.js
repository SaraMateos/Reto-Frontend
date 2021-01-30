function mostrar() {

    var datosMeteo = document.createElement('div');
    datosMeteo.setAttribute('id', 'panel');

    var texto1 = document.createElement("li");
    texto1.innerText = temperatura();

    var texto2 = document.createElement("li");
    texto2.innerText = humedad();

    var texto3 = document.createElement("li");
    texto3.innerText = viento();

    var texto4 = document.createElement("li");
    texto4.innerText = precipitaciones();

    datosMeteo.appendChild(texto1);
    datosMeteo.appendChild(texto2);
    datosMeteo.appendChild(texto3);
    datosMeteo.appendChild(texto4);

    document.getElementById('panel').appendChild(datosMeteo);

    datosMeteo.className = "sm-6 mb-3";
    datosMeteo.style.border = '4px solid #97cbdc';
    datosMeteo.style.background = '#dde8f0';
    datosMeteo.style.marginLeft = '3%';
    datosMeteo.style.listStyle = 'none';
}

function temperatura() {
    var num = Math.floor((Math.random() * 300) + 1) / 10;
    return "Temperatura: " + num + " ºC";
}

function humedad() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Humedad: " + num + " %";
}

function viento() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Viento: " + num + " km/h";
}

function vientoMax() {
    var num = Math.floor((Math.random() * 119) + 1);
    return "Vel. Máx. Viento: " + num + " km/h";
}

function vientoDir() {
    var num = Math.floor((Math.random() * 359) + 1);
    return "Dir. Viento: " + num + " º";
}

function precipitaciones() {
    var num = Math.floor((Math.random() * 99) + 1);
    return "Precipitaciones: " + num + " %";
}

function actualizarDatos() {
    mostrar();

}