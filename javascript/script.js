document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register); // Selecciona el ID - al darle click al boton se va a ejecutar la funcion.
window.addEventListener("resize", anchoPagina);

// Variables
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const form_login = document.querySelector(".form__login");
const form_register = document.querySelector(".form__register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina() {
    if(window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion() { // Si el ancho del W es mayor a 850 se ejecuta el codigo.
    if(window.innerWidth > 850) {
        form_register.style.display = "none"; 
        contenedor_login_register.style.left = "10px"; 
        form_login.style.display = "block";  
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else { // Si es menor que ejecute este.
        form_register.style.display = "none"; 
        contenedor_login_register.style.left = "0px"; 
        form_login.style.display = "block";  
        caja_trasera_register.style.opacity = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if(window.innerWidth > 850) {
        form_register.style.display = "block"; // Al clickear el boton de registrarse el formulario register se va a mostrar.
        contenedor_login_register.style.left = "410px"; // El registro se va a deslizar hacia el otro lado manteniendo un borde de 10px.
        form_login.style.display = "none"; // Para que quede oculto. 
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        form_register.style.display = "block"; 
        contenedor_login_register.style.left = "0px"; 
        form_login.style.display = "none";
        caja_trasera_register.style.opacity = "none";
        caja_trasera_login.style.opacity = "block"
        caja_trasera_login.style.opacity = "1";
    }
}