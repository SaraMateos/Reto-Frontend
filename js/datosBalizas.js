function mostrar() {

    var datosMeteo = document.createElement('div');
    datosMeteo.setAttribute('id', 'panelDatos');

    var texto1 = document.createElement("li");
    texto1.innerText = temperatura();
    texto1.setAttribute('id', 'temperatura');

    datosMeteo.appendChild(texto1);


    document.getElementById('panel').appendChild(datosMeteo);

    datosMeteo.className = "col-sm-12 col-lg-12 mb-3";
    datosMeteo.style.border = '4px solid #97cbdc';
    datosMeteo.style.background = '#dde8f0';
    datosMeteo.style.marginLeft = '3%';
    datosMeteo.style.listStyle = 'none';
}

function temperatura() {
    var num = Math.floor((Math.random() * 300) + 1) / 10;
    return "Temperatura: " + num + " ºC";
}