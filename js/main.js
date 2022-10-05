//Animação ai scroll
const sections = document.querySelectorAll('[data-anime="right"]');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if (isSectionVisible) {
      section.classList.toggle('ativo');
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);

//Modal
const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');
const vid = document.getElementById("myVideo");

if(botaoAbrir && botaoFechar && containerModal) {
  
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function cliqueForaModal(event) {
    if(event.target === this) {
      toggleModal(event);
    }
  }
  // function AbreVideo(){
	// 	containerModal.style.display = "block";
	// 	vid.play();
	// }
	
	function FechaVideo()
	{
		vid.pause();
		toggleModal.style.display = "none";
	
	}

  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', cliqueForaModal);
  // containerModal.addEventListener('click', AbreVideo);
  containerModal.addEventListener('click', FechaVideo);
}
