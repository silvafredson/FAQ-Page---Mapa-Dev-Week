/* Variável = armazenar coisas Ex: const produto = Tênis */
/* Funções = realizar ações Ex: function darOi(){alert ('oi')}*/
/* Condicionais = realizam ações conforme uma condição Ex: if */

/* Buscas os itens da tela   */
const itensPerguntasERespostas = document.querySelectorAll('.item'); /* console.log(intensPerguntasRespostas)
 */

/* Add evento de click no elemento */
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {

        /* Verificar se a pergunda/item clicada não está ativa */
        const estaAtiva = item.classList.contains('ativo') 
        
        
        if(!estaAtiva) {
            /*  Abrir a resposta atual */
            itensPerguntasERespostas.forEach(function(item) {
                item.classList.remove('ativo')
            } )

            /*  Abrir a resposta atual */
            item.classList.add('ativo')

            /* se a pargunta clicada estiver ativa */
        } else {
            /* desativar - remover a class 'ativo' */    
            item.classList.remove('ativo')
        }    
    })
})
