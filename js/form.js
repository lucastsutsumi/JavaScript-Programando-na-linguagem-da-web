; (function () {

	const btn = document.querySelector("#adicionar-paciente")

	btn.addEventListener('click', (event) => {
		event.preventDefault()

		const form = document.querySelector("#form-adiciona")

		const paciente = obtemPacienteDoFormulario(form)
		console.log(paciente)
		const pacienteTr = montaTr(paciente)

		const tabelaPacientes = document.querySelector("#tabela-pacientes")
		tabelaPacientes.appendChild(pacienteTr)

		form.reset()
	})

	function montaTr(paciente) {
		const pacienteTr = document.createElement("tr")
		pacienteTr.classList.add("paciente")

		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
		pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
		pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

		return pacienteTr
	}

	function montaTd(dado, classe) {
		const td = document.createElement("td")
		td.classList.add(classe)
		td.textContent = dado

		return td
	}

	function obtemPacienteDoFormulario(form) {
		let paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value)
		}
		return paciente
	}
})();