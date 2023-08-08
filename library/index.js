console.log('98/100\n-2 points becouse in section "About" absent transparent element size 26x26');

const menuBtn = document.querySelector('.hrNav');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})