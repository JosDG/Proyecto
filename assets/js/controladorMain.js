//intanciar la clase => crea el eobjeto
const human = new Persona();

var tarjetasExistentes = [];

function enviardatos() {
  var con = document.getElementById("email").value;
  if (tarjetasExistentes.includes(con)) {
    alert("La Direccion Email Ya existe");
    return;
  }
  human.enviadatos();
  tarjetasExistentes.push(con);
  borrar();
}

function borrar() {
  var form = document.querySelector("form");

  var campos = form.querySelectorAll("input");

  for (var i = 0; i < campos.length; i++) {
    campos[i].value = "";
  }
}

function eliminarPersona(index) {
  var tabla = document.getElementById("tablaD");
  for (var i = 1; i < tabla.rows.length; i++) {
    var fila = tabla.rows[i];
    for (var j = 0; j < fila.cells.length; j++) {
      var celda = fila.cells[j];
      if (+celda.innerHTML === index) {
        tarjetasExistentes.splice(+index - 1, 1);
        document.getElementById("tablaD").deleteRow(i);
        break;
      }
    }
  }
}

function actualizarPersona(index) {
  var tabla = document.getElementById("tablaD");
  for (var i = 1; i < tabla.rows.length; i++) {
    var fila = tabla.rows[i];
    for (var j = 0; j < fila.cells.length; j++) {
      var celda = fila.cells[j];
      if (+celda.innerHTML === index) {
        var f = document.getElementById("tablaD").rows[i];

        var nombreActual = f.cells[1].innerHTML;
        var emailActual = f.cells[2].innerHTML;
        var contrasenaActual = f.cells[3].innerHTML;

        var nuevoNombre = prompt("Nuevo nombre:", nombreActual);
        var nuevoEmail = prompt("Nuevo email:", emailActual);
        var nuevaContrasena = prompt("Nueva contraseña:", contrasenaActual);

        f.cells[1].innerHTML = nuevoNombre;
        f.cells[2].innerHTML = nuevoEmail;
        f.cells[3].innerHTML = nuevaContrasena;
        break;
      }
    }
  }
}

function iniciaSecion(index) {
  window.location.replace("indexLogin.html");
}
