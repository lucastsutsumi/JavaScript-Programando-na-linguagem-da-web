const pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i]
    const tdPeso = paciente.querySelector(".info-peso");
    const tdAltura = paciente.querySelector(".info-altura");
    const tdImc = paciente.querySelector(".info-imc");

    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);


    if (!pesoEhValido) {
        tdImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }


    if (!alturaEhValida) {
        tdImc.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) return true
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) return true
}
