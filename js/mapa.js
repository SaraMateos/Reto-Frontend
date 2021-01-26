var map = L.map('map').setView([43.00, -2.51], 9);
//npm install --save leaflet.markercluster
var markerCluster = new L.markerClusterGroup({
    maxClusterRadius: 80,
    animateAddingMarkers: true,
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    minZoom: 5,
    maxZoom: 16
}).addTo(map);

L.control.scale().addTo(map);
map.addLayer(markerCluster);

//Marcador al clickar
var icono = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//Cambiar color al clickar
function markerOnClick() {
    this.setIcon(icono);
}

//Ubicacion de las balizas
for (var i = 0; i < balizas.length; i++) {
    marker = new L.marker([balizas[i][1], balizas[i][2]]).on('click', markerOnClick).addTo(map);
    marker.bindPopup("<h4 id='bal" + balizas[i][0] + "'><b>" + balizas[i][0] + "</b></h4> <ul id='listaLaLon'><li>Latitud: " + balizas[i][1] + "</li> <li>Longitud: " + balizas[i][2] + "</li> </ul>").on("popupopen", () => {
        $("#bal" + balizas[i][0] + "").on("click", e => {
            e.preventDefault();
            alert("Has clicado en la baliza.");
        });
    });
}
markerCluster.addLayer(marker);
map.addLayer(markerCluster);