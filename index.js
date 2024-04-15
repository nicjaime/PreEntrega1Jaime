let saludo = ("Bienvenido ! ")

alert(saludo + " Continuar para la creacion de su usuario.")

let usuario = prompt ("ingresar nombre de usuario")

///crear usuario
do {
    contraseña1 = prompt ("ingresar una contraseña sin numeros");
    contraseña2 = prompt ("ingresar nuevamente su contraseña");


if (contraseña1 !== contraseña2){
    alert("sus contraseñas no coinciden, debemos comenzar nuevamente !")}
}

while (contraseña1 !== contraseña2);

alert(`felicitaciones ${usuario} has creado tu usuario`)

/// ingresar usuario

//// datos de usuario
const usuarioregistrado = usuario;
const contraseñaRegistrada = contraseña1;

for (let intentos = 3; intentos > 0; intentos--) {
    let usuarioIngresado = prompt("Iniciar sesion. Ingrese su nombre de usuario:");
    let contraseñaIngresada = prompt("Ingrese su contraseña:");
    
    if (usuarioIngresado === usuario && contraseñaIngresada === contraseña1) {
        alert(`Inicio de sesión exitoso. Bienvenido " ${usuario} ¨ !¨`);
        break;
    } else {
        alert(`Usuario o contraseña incorrectas. Te quedan ${intentos - 1} intentos.`);
    }
    
    if (intentos === 1) {
        alert("Su cuenta ha sido momentaneamente suspendida. Intentar luego.");
        break;
    }
}

////seleccionar opcion
let opcion = true

do {opcion= prompt("Para habilitar sus operaciones debe confirmar si pertenece a : principiante, intermedio, profesional");


switch (opcion){ 
    case "principiante":
    alert("bienvenido a sector principiante");
    break
    case "intermedio":
    alert("bienvenido a sector intermedio");
    break
    case "profesional":
    alert("bienvenido a sector profesional");
    break
    default: 
    opcion = false
    alert("opcion no validada");
    }
}
while(opcion === false )


//completar datos personales

function registrarDatos() {
    let datos = {}; 

    datos.nombre = prompt("Necesitamos registrar sus datos. Ingrese su nombre:");
    datos.apellido = prompt("Ingrese su apellido:");
    datos.edad = parseInt(prompt("Ingrese su edad:"));
    datos.email = prompt("Ingrese su dirección de correo electrónico:");
    datos.telefono = prompt("Ingrese su número de teléfono:");

    return datos; 
}

let datos = registrarDatos();


alert(`¡Datos personales registrados con éxito! : 
    " Nombre " ${datos.nombre}

    "Apellido: " ${datos.apellido} 

    "Edad: " ${datos.edad} 

    "Email: "  ${datos.email} 

    "Teléfono: " ${datos.telefono} `)






