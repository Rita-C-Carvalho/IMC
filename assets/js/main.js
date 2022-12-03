function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculaImc (evento) {
        evento.preventDefault();

        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        let imc = peso.value / (altura.value * altura.value);
        imc = parseFloat(imc.toFixed(2));

        function verificar(){
            if(imc < 18.5){
                resultado.innerHTML += `Seu IMC é ${imc}, você está abaixo do peso.`
            }else if(imc >= 18.5 && imc <=24.9){
                resultado.innerHTML +=`Seu IMC é ${imc}, você está com o peso normal.`
            }else if(imc >= 25 && imc <=29.9){
                resultado.innerHTML +=`Seu IMC é ${imc}, você está com sobrepeso.`
            }else if(imc >= 30 && imc <=34.9){
                resultado.innerHTML +=`Seu IMC é ${imc}, você está com obesidade 1`
            }else if(imc >= 35 && imc <=39.9){
                resultado.innerHTML +=`Seu IMC é ${imc}, você está com obesidade 2`
            }else{
                resultado.innerHTML +=`Seu IMC é ${imc}, você está com obesidade 3`
            }
        }

        verificar();
    }

    form.addEventListener('submit', calculaImc);

}
meuEscopo();
