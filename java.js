const nombre = document.getElementById("formName");
const correo = document.getElementById("formEmail");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");



form.addEventListener("submit", (e) => { 
  e.preventDefault(); 
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
    form.lastElementChild.innerHTML = ""; /*clears any error message by setting the inner content (innerHTML) of the last child element of form to an empty string.*/ 
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild.innerHTML = "";
    });
  
    if (nombre.value.length < 1 || nombre.value.trim() == "") { 
      mostrarMensajeError("formName", "Nombre no valido*");
      condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") { 
      mostrarMensajeError("formEmail", "Correo no valido*"); 
      condicion = false;
    }
    return condicion; 
  }
  
  function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }
  
  function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Listo !!";
  }
  