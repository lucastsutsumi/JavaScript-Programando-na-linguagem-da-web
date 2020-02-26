let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {
    
    paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");
    
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;
    
    let pesoEhValido = true;
    let alturaEhValida = true;
    
    
    if (peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    
    if (altura <= 0 || altura >= 3){
        tdImc.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido == true && alturaEhValida == true) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
}

function calculaImc (peso, altura) {

    let imc = 0

    imc =  peso / (altura * altura);

    return imc.toFixed(2);

}