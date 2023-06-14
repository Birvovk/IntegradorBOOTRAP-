let valorTicket = 200;

let documentoEstudiante =80;
let documentoTrainee =50;
let documentoJunior =15;

let nombre = document.getElementById("nombre");



let divErrorNombre = document.getElementById("divErrorNombre");

let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTicket = document.getElementById("cantidadTicket");
let categotia = document.getElementById("categoria");


const quitarClasesError = ()=> {
let nodosError= document.querySelectorAll(".form-control, .form-select");


for (let i = 0; i < nodosError.length; i++){
  nodosError[i].classList.remove('is-invalid');
  

}
/*
let nodosErrorDiv = querySelectorAll(".invalid-feedback")
for (let i = 0 ; i < nodosErrorDiv.length; i++){
  nodosErrorDiv[i].classList.remove('propia');
 console.log(listaNodoDiv);
}
*/
}
quitarClasesError();
const ValidacionDeCampos = ()=> {

quitarClasesError();

if(nombre.value === ""){
  //alert ("Por Favor, Escribi tu nombre");
  nombre.classList.add("is-invalid");
  nombre.classList.remove("invalid-feedback");
  nombre.focus();
  return;
}

if(apellido.value === ""){
  //alert ("Por Favor, Escribi tu nombre");
  apellido.classList.add("is-invalid");
  apellido.classList.remove("invalid-feedback");
  apellido.focus();
  return;
}

if(mail.value === ""){
  //alert ("Por Favor, Escribi tu nombre");
  mail.classList.add("is-invalid");
  mail.focus();
  return;
}
const emailValido = mail => {
  return /^[^\s@]+@[^\s@]+$/.test(mail);
}

if (!emailValido(mail.value)){
  mail.classList.add("is-invalid");
  mail.classList.remove("invalid-feedback");
  mail.focus();
  return;
}


if((cantidadTicket.value == 0) || (isNaN(cantidadTicket.value))){

  cantidadTicket.classList.add("is-invalid");
  cantidadTicket.classList.remove("invalid-feedback");
  cantidadTicket.focus();
  return;
}

if(categoria.value ===  ""){
  
  categoria.classList.add("is-invalid");
  categotia.classList.remove("invalid-feedback");
  categoria.focus();
  return;
}


let totalAPagar = (cantidadTicket.value) * valorTicket;



switch (categotia.value) {
  case "0":
    totalAPagar = totalAPagar - (documentoEstudiante /100 * totalAPagar);
    break;
  case "1":
    totalAPagar = totalAPagar - (documentoTrainee /100 * totalAPagar);
    break;
  case "2":
      totalAPagar = totalAPagar - (documentoJunior /100 * totalAPagar);
      break;
  case "3":
      totalAPagar ;
      break;

}

let totalPago = document.getElementById("totalPago");
totalPago.innerHTML = "Total a Pagar es: $"+" "+totalAPagar;

}





btn_resumen.addEventListener("click",ValidacionDeCampos);


const resetTotalPago = () =>{
  quitarClasesError();
  totalPago.innerHTML = "";
  from_formulario.reset();
}

btn_borrar.addEventListener("click", resetTotalPago);

