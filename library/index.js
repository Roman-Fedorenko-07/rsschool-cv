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

let img1 = document.getElementById("flangImg1");
let img2 = document.getElementById("CentrImg");
let img3 = document.getElementById("flangImg2");


let slides2 = document.getElementById("div-imgAbout2-2");
let slides3 = document.getElementById("flangImg3-2");

let dots2 = document.getElementById("CI2");

dots2.addEventListener("click", function(event) {
	if (!dots2) return console.log('lox');
	else {
	slides2.classList.toggle('slide1');	
	img1.classList.toggle('slide1-img1');
	img2.classList.toggle('slide1-img');
	img3.classList.toggle('slide1-img');
	}
})




// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName(".div-imgAbout2");
//   var dots = document.getElementsByClassName(".carouselImg");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

