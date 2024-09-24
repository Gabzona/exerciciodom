document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

let listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

listaTarefas.forEach(element => {
    criarElemento(element)
});
// inicializar uma lista vazia
// verificar se existe uma lista no local storage

// fazer um laçõ for pra cada tarefa, chamar a func addTarefa


function addTarefa() {
    // pegar o valor de dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById('input_tarefa').value
    // verificar o valor do input e dar um alert se estiver vazio
    if (!inputTarefa) {
        alert('o input esta vazio')
        return
    }

    //adiciona tarefa no array de tarefas
    listaTarefas.push(inputTarefa)

    //transforma o array em string e coloca a lista de tarefas no local storage
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))

    criarElemento(inputTarefa)
}

function criarElemento(inputTarefa) {
        // criar o elemento <li>
        const elemento_tarefa = document.createElement('li')
        elemento_tarefa.className = 'item_tarefa'
    
        // adicionar o texto do input no novo <li>
        const conteudoTarefa = document.createElement('p')
        conteudoTarefa.textContent = inputTarefa
    
        // adicionar um botão para deletar tarefa no novo <li>
        const botaoDeletar = document.createElement('button')
        botaoDeletar.textContent = 'Deletar Tarefa'
        botaoDeletar.addEventListener('click', () => {
            //remove o elemento da tela
            elemento_tarefa.remove()
            // filtra a tarefa a ser removida
            listaTarefas = listaTarefas.filter((tarefa) => tarefa !== inputTarefa)
            //salva novamente  lista de tarefas no local storage
            localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
        })
    
        // adicionar um botão para completar a tarefa no <li>
        const botaoCompletar = document.createElement('button')
        botaoCompletar.textContent = 'Completar Tarefa'
        botaoCompletar.addEventListener('click', () => {
            conteudoTarefa.classList.toggle('completada')
        })
    
        // adicionar o novo elemento <li> a tag <ul>
        elemento_tarefa.appendChild(conteudoTarefa)
        elemento_tarefa.appendChild(botaoDeletar)
        elemento_tarefa.appendChild(botaoCompletar)
        document.getElementById('lista_tarefa').appendChild(elemento_tarefa)
}
