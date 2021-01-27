//Inicio
$.ajax({
    url: 'http://127.0.0.1:8000/api/inicio',
    type: 'POST',
    headers: {"Authorization": 'Bearer ' + sessionStorage.getItem('token')},
    data: formData,
    beforeSend: function () {
    },
    //HTML a donde va a redirigir si va bien
    success: function (respuesta) {
        window.location = "measurements.html";
    },
    error: function() {
        console.log("No se ha podido obtener la información.");
    },
    dataType: 'json'
});

