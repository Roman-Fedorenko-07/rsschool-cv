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
///////////////////////////////////////////
const img1 = document.getElementById("flangImg1");
const img2 = document.getElementById("CentrImg");
const img3 = document.getElementById("flangImg2");

const slides2 = document.getElementById("div-imgAbout2-2");
const slides3 = document.getElementById("div-imgAbout3-2");



const dots1 = document.getElementById("CI1");
const dots2 = document.getElementById("CI2");
const dots3 = document.getElementById("CI3");
const dots4 = document.getElementById("carouselImgId1");
const dots5 = document.getElementById("carouselImgId2");
///////////////////////////////////////////


dots2.addEventListener("click", function(event) {
	if (!dots2) return console.log('lox');
	else {
	slides2.classList.add('slide1');
	slides3.classList.add('slide1');	
	img1.classList.add('slide1-img1');
	img2.classList.add('slide1-img');
	img3.classList.add('slide1-img');

	slides2.classList.remove('slide2-img');	
	img3.classList.remove('slide2-img');
	img2.classList.remove('slide2-img-2');
	slides3.classList.remove('slide2');
	slides2.classList.remove('slide-768px-dot4');
	}
})

dots3.addEventListener("click", function(event) {
	if (!dots3) return console.log('lox');
	else {
		slides2.classList.remove('slide1');	
		img2.classList.remove('slide1-img');
		img3.classList.remove('slide1-img');
		
	slides2.classList.add('slide2-img');	
	img3.classList.add('slide2-img');
	img2.classList.add('slide2-img-2');
	slides3.classList.add('slide2');
	img1.classList.add('slide1-img1');
	slides2.classList.remove('slide-768px-dot4');
	}
})

dots1.addEventListener("click", function(event) {
	if (!dots3) return console.log('lox');
	else {
		slides2.classList.remove('slide1');	
		img2.classList.remove('slide1-img');
		img3.classList.remove('slide1-img');
		
	slides2.classList.remove('slide2-img');	
	img3.classList.remove('slide2-img');
	img2.classList.remove('slide2-img-2');
	slides3.classList.remove('slide2');
	img1.classList.remove('slide1-img1');

	slides2.classList.add('slide-768px');
	slides3.classList.add('slide-768px');
	slides2.classList.remove('slide-768px-dot4');
	}
})

dots4.addEventListener("click", function(event) {
	if (!dots4) return console.log('lox');
	else {
		slides2.classList.add('slide-768px-dot4');
		img3.classList.remove('slide2-img');
		img3.classList.add('slide-768px-dot4');
	}
})

const prof = document.getElementById('PI');
const reg = document.getElementById('reg');

prof.addEventListener("click", function(event) {
	if (!prof) return console.log('lox');
	else {
	reg.classList.toggle('profOpen');
	}
}
)

document.addEventListener("click", function(event) {
	const clickProfIcon = event.composedPath().includes(prof);
	if (!clickProfIcon) {
		return reg.classList.remove('profOpen');
	}
}
)

 const plog = document.getElementById('plog');
 const login = document.getElementById('login');

 plog.addEventListener("click", function(event) {
	if (!plog) return console.log('lox');
	else {
	login.classList.toggle('logOpen');
	}
}
)

const closebtn = document.getElementById('closebtn1');

closebtn.addEventListener("click", function(event) {
	if (!closebtn) return console.log('lox');
	else {
	login.classList.remove('logOpen');
	}
}
)

document.addEventListener("click", function(event) {
	const clickclosebtn = event.composedPath().includes(login);
	if (!clickclosebtn) {
		return login.classList.remove('profOpen');
	}
}
)

const preg = document.getElementById('plog2');
 const registr = document.getElementById('registr');

 preg.addEventListener("click", function(event) {
	if (!preg) return console.log('lox');
	else {
	registr.classList.toggle('regOpen');
	}
}
)

const closebtn2 = document.getElementById('closebtn2');

closebtn2.addEventListener("click", function(event) {
	if (!closebtn2) return console.log('lox');
	else {
	registr.classList.remove('regOpen');
	}
}
)

const predl1 = document.getElementById('predl1');
const predl2 = document.getElementById('predl2')

predl1.addEventListener("click", function(event) {
	if (!predl1) return console.log('lox');
	else {
		login.classList.remove('logOpen');
		registr.classList.add('regOpen');
	}
}
)

predl2.addEventListener("click", function(event) {
	if (!predl2) return console.log('lox');
	else {
		login.classList.add('logOpen');
		registr.classList.remove('regOpen');
	}
}
)

const win = document.getElementById('win');
const spr = document.getElementById('spr');
const sum = document.getElementById('sum');
const aut = document.getElementById('aut');

const winnav = document.getElementById('winter-nav');
const sprnav = document.getElementById('spring-nav');
const sumnav = document.getElementById('summer-nav');
const autnav = document.getElementById('autumn-nav');



win.addEventListener("click", function(event) {
	if (!win) return console.log('lox');
	else {
		winnav.classList.remove('hide');
		sprnav.classList.remove('active');
		sumnav.classList.remove('active');
		autnav.classList.remove('active');
	}
}
)

spr.addEventListener("click", function(event) {
	if (!spr) return console.log('lox');
	else {
		winnav.classList.add('hide');
		sprnav.classList.add('active');
		sumnav.classList.remove('active');
		autnav.classList.remove('active');
	}
}
)

sum.addEventListener("click", function(event) {
	if (!sum) return console.log('lox');
	else {
		winnav.classList.add('hide');
		sprnav.classList.remove('active');
		sumnav.classList.add('active');
		autnav.classList.remove('active');
	}
}
)

aut.addEventListener("click", function(event) {
	if (!aut) return console.log('lox');
	else {
		winnav.classList.add('hide');
		sprnav.classList.remove('active');
		sumnav.classList.remove('active');
		autnav.classList.add('active');
	}
}
)




const FN = document.getElementById('FNinp');
const LN = document.getElementById('LNinp');
const email = document.getElementById('emailinp');
const pass = document.getElementById('passinp')

localStorage.setItem('usersArray', JSON.stringify([]));
localStorage.setItem('loginStatus', false);

let users = JSON.parse(localStorage.getItem('usersArray'))


class newUser {
	constructor(FN, LN, emaill, passs) {
		this.FN = FN;
		this.LN = LN; 
		this.emaill = emaill;
		this.passs = passs;
	}
}

let emailprov = /[A-Za-z0-9.@-_]{5, 30}/g;
let passprov = /[A-Za-z0-9._-]{5, 30}/g;
let FNprov = /[A-Za-z]{5, 30}/g;
let LNprov = /[A-Za-z]{5, 30}/g;

function regNewUser() {
	if (emailprov.test(email.value) && passprov.test(pass.value) && FNprov.test(FN.value) && LNprov.test(LN.value)) {
		users.push(new newUser(FN.value, LN.value, email.value, pass.value));
		localStorage.setItem('usersArray', JSON.stringify(users));
	}
}

const regbtn = document.getElementById('regbtn');
regbtn.onclick = regNewUser;

const emlog = document.getElementById('emlog');
const passlog = document.getElementById('passlog');

const logbtn = document.getElementById('logbtn');
logbtn.onclick = function() {
	if (emailprov.test(emlog.value) && passprov.test(passlog.value)) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].emaill === email.value && users[i].passs === pass.value) {
				localStorage.setItem('loginStatus', true)
			}
		}
	}
}


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

