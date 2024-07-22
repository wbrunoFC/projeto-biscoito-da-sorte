const tela1 = document.querySelector('.card1');
const tela2 = document.querySelector('.card2');

function abrir() {
	tela1.classList.add('hide');
	tela2.classList.remove('hide');
}

function abrirOutro() {
	tela2.classList.add('hide');
	tela1.classList.remove('hide');
}
