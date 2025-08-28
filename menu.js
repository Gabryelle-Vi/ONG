// Seleciona o botão de menu e o menu em si
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

const candidatoLink = document.getElementById('candidato-link');
        const alertOverlay = document.getElementById('alert-overlay');
        const alertForm = document.getElementById('alert-form');
        const btnContinuar = document.getElementById('btn-continuar');
        const btnFalar = document.getElementById('btn-falar');
        const btnCancelar = document.getElementById('btn-cancelar');

if (toggle && menu) {
  toggle.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
}

// Função do carrossel
function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    if (!carrossel) return; 
    
    const card = carrossel.querySelector('.card');
    if (!card) return; 
    
    const cardWidth = card.offsetWidth + 20;
    const scrollAmount = cardWidth * 3 * direction;
    
    carrossel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Carrega os embeds do Instagram
function carregarInstagramEmbeds() {
    if (typeof instgrm !== 'undefined') {
        instgrm.Embeds.process();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btnPrev = document.querySelector('.carrossel-btn.prev');
    const btnNext = document.querySelector('.carrossel-btn.next');
    
    if (btnPrev) btnPrev.addEventListener('click', function() { moverCarrossel(-1); });
    if (btnNext) btnNext.addEventListener('click', function() { moverCarrossel(1); });
    
    carregarInstagramEmbeds();
});

window.addEventListener('load', carregarInstagramEmbeds);


//Alert para o card de formulário de candidatos
function atCandidatos(){
    Swal.fire({
  title: "ATENÇÃO",
  text: "Por favor, preencha este formulário apenas se você já entrou em contato com um de nossos responsáveis por meio das nossas redes sociais e foi orientado(a) a preencher.",
  icon: "warning"
  }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://form.jotform.com/240036078215045";
        }
});
}



