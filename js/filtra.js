const campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function() {
    const pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            let nomeTd = paciente.querySelector(".info-nome")
            let nome = nomeTd.textContent

            const expressao = new RegExp(this.value, "i")
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            }
        }
    } else {
        pacientes.forEach(
            paciente => paciente.classList.remove("invisivel")
        )
    }

})