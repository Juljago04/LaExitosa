function logout() {
    window.location.href = "Index.html";
}
function usuario(){
    window.location.href = "Menu_Usuario.html";
}
function secretaria(){
    window.location.href = "Menu_Administrador.html";
}
function odontologo(){
    window.location.href = "Menu_Odontologo.html";
}
function usuarios(){
    window.location.href = "CrudUsuario.html";
}
function citas(){
    window.location.href = "CrudCitas.html";
}
function historias(){
    window.location.href = "CrudHistorias.html";
}
function diagnosticos(){
    window.location.href = "CrudDiagnostico.html";
}
function examenes(){
    window.location.href = "CrudExamenes.html";
}
function agendas(){
    window.location.href = "CrudAgenda.html";
}
function citasO(){
    window.location.href = "OdontologoCitas.html";
}
function historiasO(){
    window.location.href = "OdontologoHistorias.html";
}
function diagnosticosO(){
    window.location.href = "OdontologoDiagnostico.html";
}
function examenesO(){
    window.location.href = "OdontologoExamenes.html";
}
function citasu(){
    window.location.href = "CCitasU.html";
}
function scrollto(div) {
    $('html, body').animate({
        scrollTop: $('#' + div).offset().top
    }, 1000);
}