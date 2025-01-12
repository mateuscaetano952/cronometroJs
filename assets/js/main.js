// Seleção de elementos
let btnIniciar = document.querySelector('.iniciar');
let btnZerar = document.querySelector('.zerar');
let btnParar = document.querySelector('.parar');

//Declarações de variaveis

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
cron = 0;

//Chamadas das funçpes

btnIniciar.onclick = () => {
    cron = setInterval (() => {iniciar()}, 10);
};

btnZerar.onclick = () => {
    zera();
    clearInterval(cron);
};

btnParar.onclick = () => {
   clearInterval(cron);
};


function zera(){
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    cron = 0;

    document.getElementById('horas').innerText = "00";
    document.getElementById('minutos').innerText = "00";
    document.getElementById('segundos').innerText = "00";
    document.getElementById('milisegundos').innerText = "00";

}


function iniciar(){
    if ((milisegundos += 10) == 1000) {
        milisegundos = 0;
        segundos++;
      }
      if (segundos == 60) {
        segundos = 0;
        minute++;
      }
      if (minutos == 60) {
        minutos = 0;
        horas++;
      }

      console.log(horas + " " + minutos + " " + segundos + " " + milisegundos)

      document.getElementById('horas').innerText = retornaValores(horas);
      document.getElementById('minutos').innerText = retornaValores(minutos);
      document.getElementById('segundos').innerText = retornaValores(segundos);
      document.getElementById('milisegundos').innerText = retornaValores(milisegundos);


}

function retornaValores(valor){
    return valor > 10 ? valor : `0${valor}`
} 