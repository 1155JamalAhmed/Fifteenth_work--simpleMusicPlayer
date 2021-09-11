const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const songs = document.querySelectorAll('div audio');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songName = document.querySelector('.music_container h2');
const writerName = document.querySelector('.music_container h3');
const imageOfSong = document.querySelector('.img_container img');

let whichSong = 0;
const noOfSongs = songs.length;

const pauseToPlayTogglingHandler = () => {
  playButton.classList.add('display-none');
  pauseButton.classList.remove('display-none');
  songs[whichSong].play();
}

const playToPauseTogglingHandler = () => {
  playButton.classList.remove('display-none');
  pauseButton.classList.add('display-none');
  songs[whichSong].currentTime = 0;
  songs[whichSong].pause();
}

let newSong = 0;
const changingSong = () => {
  newSong = whichSong+1;
  songName.innerHTML = songName.innerHTML.slice(0,5) + (newSong);
  writerName.innerHTML = writerName.innerHTML.slice(0,6) + (newSong);
  imageOfSong.src = 'images/image-' + (newSong) + '.jpg';
  pauseToPlayTogglingHandler();
}


const nextSongHandler = () => {
  playToPauseTogglingHandler();
  whichSong = (whichSong+1) % noOfSongs;
  changingSong();
  
}

const prevSongHandler = () => {
  playToPauseTogglingHandler();
  whichSong--;
  if(whichSong < 0) whichSong = noOfSongs-1;
  changingSong();
}

playButton.addEventListener('click', pauseToPlayTogglingHandler);
pauseButton.addEventListener('click', playToPauseTogglingHandler);
nextButton.addEventListener('click', nextSongHandler);
prevButton.addEventListener('click', prevSongHandler)