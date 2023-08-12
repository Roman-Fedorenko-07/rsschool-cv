console.log('98/100\n-2 points becouse in section "About" absent transparent element size 26x26');

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.hrNav');

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})
	
	menu.addEventListener('click', e => {
	if(e.target.classList.contains('.menu')) {
		menu.classList.remove('active')
		menuBtn.classList.remove('active')
		body.classList.remove('lock')
	}
	})

	menu.addEventListener('click', e => {
		if(e.target.classList.contains('body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
		})

menu.querySelectorAll('.menuItem').forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.remove('active')
		menuBtn.classList.remove('active')
		body.classList.remove('lock')
	})
})
	
}
