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
const pCT = document.querySelector('.currentTime');
const pDT = document.querySelector('.duration');

const songs = ['steve5ive - Redemption', 'steve5ive - Peccato'];

let songIndex = 0;

function loadsong(song) {
    tytle.innerHTML = song
    audio.src = `audio/${song}.mp3`
    cover.src = `icon/cover${songIndex + 1}.jpg`
}

loadsong(songs[songIndex])

function playsong() {
    audio.play()
    player.classList.add('play')
}

function pausesong() {
    audio.pause()
    player.classList.remove('play')
}

btnp.addEventListener('click', () => {
    const isplaying = player.classList.contains('play')
    if (isplaying) {
        pausesong()
        cover.classList.remove('big')
        imgpp.src = 'icon/Play.svg'
    }
    else {
        playsong()
        cover.classList.add('big')
        imgpp.src = 'icon/Pause.svg'
    }
})

function nextsong() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadsong(songs[songIndex])
    playsong()
}

btnnext.addEventListener('click', nextsong)

function backsong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = 1
    }
    loadsong(songs[songIndex])
    playsong()
}

btnback.addEventListener('click', backsong)




function updprog(e) {
    const {duration, currentTime} = e.srcElement
    const progressPresent = (currentTime / duration) * 100
    progr.style.width = `${progressPresent}%`
    let min = Math.floor(currentTime / 60);
    let sec = Math.floor(currentTime % 60);
    pCT.innerHTML = `${min}:${sec < 10 ? '0' : ''}${sec}`;
    pDT.innerHTML = formatDuration(duration);
}

function formatDuration(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

audio.addEventListener('timeupdate', updprog)

function setprogr(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    

    audio.currentTime = (clickX / width) * duration
}
progrcont.addEventListener('click', setprogr)

audio.addEventListener('ended', nextsong)

