var contador = 0;
class Persona {
  //Atributos
  //Costructor de atributos
  //Constructor
  constructor(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
  }

  //Metodos
  enviadatos() {
    const nombreH = document.getElementById("name").value;
    human.nombre = nombreH;
    const emailH = document.getElementById("email").value;
    human.email = emailH;
    const claveH = document.getElementById("pasw").value;
    human.clave = claveH;
    human.leaObjeto();
  }

  leaObjeto() {
    var index = ++contador;
    document.getElementById("tablaD").innerHTML +=
      "<tr><td>" +
      index +
      "</td><td>" +
      human.nombre +
      "</td><td>" +
      human.email +
      "</td><td>" +
      human.clave +
      "</td><td>" +
      "<button type='button' class='btn btn-warning' data-bs-toggle='modal' data-bs-target='#noc' onclick='actualizarPersona(" +
      index +
      ")'>Actualizar</button>" +
      "</td><td>" +
      "<button type='button' class='btn btn-danger' onclick='eliminarPersona(" +
      index +
      ")'>Eliminar</button> " +
      "</td><td>" +
      "<button type='button' class='btn btn-primary' onclick='iniciaSecion(" +
      index +
      ")'>Sesión</button> " +
      "</td></tr>";
  }
}
