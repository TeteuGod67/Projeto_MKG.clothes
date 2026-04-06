// Aqui você pode adicionar funcionalidades JavaScript, se necessário.
// Por exemplo, podemos adicionar um alerta quando um produto for comprado.

const buttons = document.querySelectorAll('.produto button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});