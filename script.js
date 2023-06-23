const data = new Date();
const datahora = data.getHours();
const body = document.getElementById('body')
const agaum = document.getElementById('agaum')

let mensagem = '';
let clase = '';


 if(datahora >= 6 && datahora < 12){
 mensagem = "Bom dia";
 clase = "manhã";
 }
 if(datahora >= 12 && datahora < 18 ){
    mensagem = "Boa tarde";
    clase = "tarde";
 }
 else if( datahora >= 18 && datahora < 24){
    mensagem = "Boa noite ";
    clase = "noite";
 }
 else{
    mensagem = "É de madrugada";
    clase = "madrugada";
 }
 body.classList.add( clase)
 agaum.innerText = mensagem


