console.log('98/100\n-2 points becouse in section "About" absent transparent element size 26x26');

const menu = document.querySelector('navig')
const menuIcon = document.querySelector('hrNav')

const body = document.body;

if (menu && menuIcon) {
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuIcon.classList.toggle('active')
        body.classList.toggle('lock')
    })
} 