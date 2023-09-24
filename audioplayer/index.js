const player = document.querySelector('.player');
const btnplay = document.querySelector('.btnplay');
const btnp = document.querySelector('.btnplay');
const btnback = document.querySelector('.btnback');
const btnnext = document.querySelector('.btnnext');
const audio = document.querySelector('.audio');
const progrcont = document.querySelector('.progrcont');
const progr = document.querySelector('.progr');
const imgpp = document.querySelector('.btnp');
const tytle = document.querySelector('.song');
const cover = document.querySelector('.coverImg');

const songs = ['steve5ive - Redemption.mp3', 'steve5ive - Peccato.mp3'];

let songIndex = 0;

function loadsong(song) {
    tytle.innerHTML = song
    audio.src = `audio/${song}.mp3`
    cover.src = `icon/cover${songIndex + 1}.jpg`
    
}

loadsong(songs[songIndex])
console.log('232323')