$(document).ready(function () { //click
    GetAll();
});

function showModal() {
    $('#modal').modal("show");
}

function modalClose() {
    $('#modal').modal("hide");
}

function limpiarModal() {
    $('#txtNombre').val('');
    $('#txtCorreo').val('');
    $('#txtDireccion').val('');
    $('#txtGenero').val('');
   
}

function GetAll() {
    $.ajax({

        url: 'https://randomuser.me/api/',
        type: 'GET',
        success: function (result) {
            console.log(result)
            $('#tablaEmpleado tbody').empty();
            $.each(result.results, function (i, usuario) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'><img src=" + usuario.picture.medium+"></td>"
                    + "<td class='text-center'>" + usuario.name.first + "</td>"
                    + "<td class='text-center'>" + usuario.email + "</td>"
                    + "<td class='text-center'>" + usuario.location.city + "</ td>"
                    + "<td class='text-center'>" + usuario.gender + "</ td>"
                    + "</tr>";
                $("#tablaUsuario tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage); //es un error de JSON, y es porque puede venir vacio o null
        }
    });
};
function Add() {


    var json = {
        Nombre: $('#txtNombre').val(),
        Correo: $('#txtCorreo').val(),
        Direccion: $('#txtDireccion').val(),
        Genero: $('#txtGenero').val(),
       
    }


    $.ajax({

       /* url: 'http://localhost:50952/api/empleado',*/
        type: 'POST',
        datatype: 'JSON',
        data: json,
        success: function (result) {
            alert("Usuario dado de alta correctamente");
            modalClose();
            limpiarModal();
            GetAll();
        },
        error: function (result) {
            console.log(result);
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage); //es un error de JSON, y es porque puede venir vacio o null
        }
    });

}