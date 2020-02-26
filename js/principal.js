; (function () {
	
	const btn = document.querySelector("#adicionar-paciente")
	
	btn.addEventListener('click', (event) => {
		event.preventDefault()

		const form = document.querySelector("#form-adiciona")
		
		const peso = form.peso.value
		const altura = form.altura.value
		const gordura = form.gordura.value

		//Cria TR
		const pacienteTr = criarTrPaciente()
		
		//Cria TD
		const pesoTd = document.createElement("td")
		const alturaTd = document.createElement("td")
		const gorduraTd = document.createElement("td")
		const imcTd = document.createElement("td")

		
		//Adiciona classe na TD
		pesoTd.classList.add("info-peso")
		alturaTd.classList.add("info-altura")
		gorduraTd.classList.add("info-gordura")
		imcTd.classList.add("info-imc")

		
		//Adiciona o valor do form na Tabela
		pesoTd.textContent = peso
		alturaTd.textContent = altura
		gorduraTd.textContent = gordura

		
		pacienteTr.appendChild(pesoTd)
		pacienteTr.appendChild(alturaTd)
		pacienteTr.appendChild(gorduraTd)
		pacienteTr.appendChild(imcTd)

		const tabelaPacientes = document.querySelector("#tabela-pacientes")
		tabelaPacientes.appendChild(pacienteTr)
	})
})();

function criarTrPaciente() {
	const tr = document.createElement("tr")
	pacienteTr.classList.add("paciente")
}

function criarTd(form, tr, nomeClasse) {
	const nome = form.nome.value
	const td = document.createElement("td")
	td.classList.add(nomeClasse)
	nomeTd.textContent = nome
	tr.appendChild(td)
}