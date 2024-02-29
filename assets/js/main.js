let btnIniciar = document.querySelector('.iniciar');
let btnZerar = document.querySelector('.zerar');
let btnParar = document.querySelector('.parar');

let horas = 0;
let minutos = 0;
let segundos = 0;

let stringHora;
let stringMinuto;
let stringSegundo;
let stringTimer;

let interval;

btnIniciar.addEventListener("click", () => {
    iniciarTimer();
})

btnZerar.addEventListener("click", () => {
    horas = 0;
    minutos = 0;
    segundos = 0;

})    

btnParar.addEventListener("click", () => {
    clearInterval(interval);
})

function iniciarTimer(){
    interval = setInterval(()=> {
        if(segundos < 60){
            segundos++;
        }
        
        if(segundos >= 60){
            segundos = 0;
            minutos += 1;
        }

        if(minutos >= 60){
            minutos = 0;
            horas += 1;
        }


        geraString()
        let displayTimer = document.querySelector('.timerDisplay');
        displayTimer.innerHTML = stringTimer;
    }, 100)

    function  geraString(){
        if(horas <= 9 ){
            stringHora = "0" + horas;
        }else{
            stringHora = hora;
        }

        if(minutos <= 9){
            stringMinuto = "0" + minutos;
        }else{
            stringMinuto = minutos;
        }


        if(segundos <= 9){
            stringSegundo = "0" + segundos;
        }else{
            stringSegundo = segundos;
        }


        stringTimer = stringHora + ":" + stringMinuto + ":" + stringSegundo; 
        console.log("0" + stringTimer);
    }
}