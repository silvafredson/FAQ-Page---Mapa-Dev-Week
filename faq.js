/* Buscas os itens da tela   */
const itensPerguntasERespostas = document.querySelectorAll('.item') 

/* Add evento de click no elemento */
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {

        /* Verificar se a pergunda/item clicada não está ativa */
        const estaAtiva = item.classList.contains('ativo') 

        /* Eu preciso Fechar Todas */
        itensPerguntasERespostas.forEach(function(item) {
            item.classList.remove('ativo')
        })

        // SE A PERGUNTA NÃO ESTA ATIVA 
        if(!estaAtiva) {
            // ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')
        
        // SE A PERGUNTA ESTIVER ATIVA
        } else {
            // DESATIVAR (REMOVERIA A CLASSE ATIVO)
            item.classList.remove('ativo')
        }
    })
})
