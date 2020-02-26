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
    
    
    if (validaPeso(peso)){
        tdImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    
    if (validaAltura(altura)){
        tdImc.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
}

function calculaImc (peso, altura) {
    let imc = 0
    imc =  peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso <= 0 || peso >= 1000) true
}

function validaAltura(altura) {
    if(altura <= 0 || altura >= 3) true
}