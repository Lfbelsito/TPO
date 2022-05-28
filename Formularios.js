/*FORMULARIO TASACIONES*/

function FormularioTasacion(){
    var ApellidoyNombre=document.getElementById(ApellidoyNombre).value
    var Telefono=document.getElementById(Telefono).value
    var email=document.getElementById(email).value
    var TipoDeTasacion=document.getElementById(TipoDeTasacion).value
    var Direccion=document.getElementById(Direccion).value
    console.log(ApellidoyNombre +" "+Telefono +" "+ email +" "+ TipoDeTasacion +" "+ Direccion)
}

function FormularioContacto(){
    var ApellidoyNombre=document.getElementById(ApellidoyNombre).value
    var emailContacto=document.getElementById(emailContacto).value
    var MensajeContacto=document.getElementById(MensajeContacto).value
    console.log(ApellidoyNombre +" "+ emailContacto +" "+ MensajeContacto)
}
