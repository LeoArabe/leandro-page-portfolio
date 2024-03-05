// Seleciona todos os elementos com a classe 'item-list'
const elementList = document.querySelectorAll('.item-menu');

// Função para remover a classe 'active' de todos os elementos
const removeBoardHoverClass = () => {
    
};

// Função para adicionar a classe 'active' ao elemento que disparou o evento
const redirectPage  = (e) => {
    elementList.forEach(element => {
        element.classList.remove('active');
    });
    const element = e.target;
    element.classList.add('active');
};

// Adiciona os event listeners de mouseenter e mouseleave a cada elemento
elementList.forEach(element => {
    element.addEventListener('onClick', redirectPage );
});
