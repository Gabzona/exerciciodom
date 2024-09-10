const textoInput = document.getElementById('qualquercoisa')
const botao = document.getElementById('iddobotao')
const mensagem = document.getElementsByTagName('p')
//pegando os IDs dos elementos :)

botao.addEventListener("click", function(){
    const valorTexto = textoInput.value;
    if(valorTexto ==""){
        mensagem[0].textContent = 'escreva alguma coisa'
    } else {
        mensagem[0].textContent = `você escreveu: ${valorTexto}`
    }
})