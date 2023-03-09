export function playMusic() {
  const playerEl = document.querySelector(".player");
  const playBtnEl = document.querySelector(".play");
  const prevBtnEl = document.querySelector(".play-prev");
  const nextBtnEl = document.querySelector(".play-next");
  const playListEl = document.querySelector(".play-list");
  const playListItems = document.getElementsByTagName("li");

  const progressContainerEl = document.querySelector(".progress-container");
  const progressBarEl = document.querySelector(".progress__bar");
  const coverImgEl = document.querySelector(".cover__img");
  const titleEl = document.querySelector(".title");
  const audio = new Audio();
  let li;

  const songs = [
    "Aqua Caelestis",
    "Ennio Morricone",
    "River Flows In You",
    "Summer Wind",
  ];

  function createPlayList(songs) {
    songs.forEach((element) => {
      li = document.createElement("li");
      li.classList.add("play-item");
      playListEl.append(li);
      li.textContent = `${element}`;
    });
  }

  createPlayList(songs);

  let songIndex = 0;

  function loadSong(song) {
    titleEl.innerHTML = song;
    audio.src = `../momentum/assets/sounds/${song}.mp3`;
    coverImgEl.src = `../momentum/assets/sounds/cover_${songIndex + 1}.jpg`;
  }

  loadSong(songs[songIndex]);

  function playSong() {
    playerEl.classList.add("start");
    playBtnEl.classList.add("pause");
    audio.play();
    const arr = [...playListItems];
    arr[songIndex].classList.add("item-active");
  }

  function pauseSong() {
    playerEl.classList.remove("start");
    playBtnEl.classList.remove("pause");
    audio.pause();
  }

  playBtnEl.addEventListener("click", () => {
    const isPlaying = playerEl.classList.contains("start");
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  function nextSong() {
    const arr = [...playListItems];
    arr[songIndex].classList.remove("item-active");

    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  function prevSong() {
    const arr = [...playListItems];
    arr[songIndex].classList.remove("item-active");

    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  nextBtnEl.addEventListener("click", nextSong);
  prevBtnEl.addEventListener("click", prevSong);

  function updateProgressBar(e) {
    const durationSong = audio.duration;
    const currentTimeSong = audio.currentTime;
    const progressPersent = (currentTimeSong / durationSong) * 100;
    progressBarEl.style.width = `${progressPersent}%`;
  }

  function changeProgress(e) {
    const width = this.clientWidth;
    const clickOnProgressX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickOnProgressX / width) * duration;
  }

  progressContainerEl.addEventListener("click", changeProgress);
  audio.addEventListener("timeupdate", updateProgressBar);
  audio.addEventListener("ended", nextSong);
}
