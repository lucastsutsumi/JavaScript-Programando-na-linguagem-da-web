const tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener('dblclick', (event) => {
    const linhaParaRemover = event.target.parentNode
    linhaParaRemover.classList.add("fadeOut")
    
    setTimeout(() => linhaParaRemover.remove(), 1000) 
    
})