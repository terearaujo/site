// Seleciona todos os slides e pontos de navegação
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;
let slideInterval;

// Função para mostrar um slide específico
function showSlide(index) {
    // Remove a classe 'active' de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Atualiza o índice atual (garante que não saia dos limites)
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Adiciona a classe 'active' ao slide e dot atual
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Função para ir para o próximo slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Função chamada quando o usuário clica num dot
function currentSlide(index) {
    showSlide(index);
    resetTimer(); // Reinicia o timer para não mudar logo após o clique
}

// Função para iniciar o timer automático
function startTimer() {
    slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

// Função para reiniciar o timer (usada ao clicar manualmente)
function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// Inicia o slider assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});

/* --- Animação de aparecer ao rolar (Scroll Reveal) --- */

// Seleciona todos os cards de funcionalidades
const featureCards = document.querySelectorAll('.feature-card');

// Cria um "observador" para ver quando os elementos entram na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando o card entra na tela, adiciona a classe 'visible'
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Ativa quando 10% do card estiver visível
});

// Começa a observar cada card
featureCards.forEach(card => {
    observer.observe(card);
});