const botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function (event) {

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
 
    const erroAjax = document.querySelector("#erro-ajax")
 
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            const resposta = xhr.responseText
            const pacientes = JSON.parse(resposta)

            pacientes.forEach(paciente => {
                if (!temNaTabela(paciente.nome)){
                    adicionaPacienteNaTabela(paciente)
                }
            })
        } else {
            erroAjax.classList.remove("invisivel")
        }

    })

    xhr.send()
})

function temNaTabela(nomePaciente) {
    const pacientesTabela = document.querySelectorAll(".paciente")
    for (let i = 0; i < pacientesTabela.length; i++) {
        const paciente = pacientesTabela[i];
        const nomeTd = paciente.querySelector(".info-nome")
        const nome = nomeTd.textContent
        if(nomePaciente == nome) {
            return true
        }
    }
}
