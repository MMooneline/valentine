function togglePopup1() {
    var popup = new bootstrap.Modal(document.getElementById('popup1'));
    popup.show();
}

function togglePopup2() {
    var popup2 = new bootstrap.Modal(document.getElementById('popup2'));
    popup2.show();
}

document.getElementById("aboutEmiButton").addEventListener("click", function () {
    const aboutEmiPopup = new bootstrap.Modal(document.getElementById("aboutEmiPopup"));
    aboutEmiPopup.show();
});

const songs = [
    {
        title: "Take A Chance",
        artist: "fromis_9",
        src: "./music/Take A Chance.mp3",
        cover: "./images/take a chance cover.png",
    },
    {
        title: "Tell Me",
        artist: "Fifty Fifty",
        src: "./music/Tell Me.mp3",
        cover: "./images/tell me cover.jpeg",
    },
    {
        title: "I Wanna Be Good",
        artist: "The Walters",
        src: "./music/I Wanna Be Good.mp3",
        cover: "./images/i wanna be good cover.jpeg",
    },
    {
        title: "Sofia",
        artist: "Clairo",
        src: "./music/Sofia.mp3",
        cover: "./images/sofia cover.jpeg",
    },
    {
        title: "Are You Bored Yet?",
        artist: "Wallows ft. Clairo",
        src: "./music/Are You Bored Yet.mp3",
        cover: "./images/are you bored yet cover.jpeg",
    },
    {
        title: "Lookalike",
        artist: "Conan Gray",
        src: "./music/Lookalike.mp3",
        cover: "./images/lookalike cover.jpeg",
    },
    {
        title: "Heavy",
        artist: "The Marias",
        src: "./music/Heavy.mp3",
        cover: "./images/heavy cover.jpeg",
    },
];

const songs2 = [
    {
        title: "Rainbow 책갈피",
        artist: "NCT Dream",
        src: "./music/Rainbow.mp3",
        cover: "./images/rainbow cover.jpeg",
    },
    {
        title: "No. 1 Party Anthem",
        artist: "Arctic Monkeys",
        src: "./music/No. 1 Party Anthem.mp3",
        cover: "./images/no 1 party anthem cover.png",
    },
    {
        title: "Miracle",
        artist: "NCT Wish",
        src: "./music/Miracle.mp3",
        cover: "./images/miracle cover.jpeg",
    },
    {
        title: "Small Things",
        artist: "Yesung",
        src: "./music/Small Things.mp3",
        cover: "./images/small things cover.jpeg",
    },
    {
        title: "Secret Door",
        artist: "Arctic Monkeys",
        src: "./music/Secret Door.mp3",
        cover: "./images/secret door cover.jpeg",
    },
    {
        title: "Never Goodbye",
        artist: "NCT Dream",
        src: "./music/Never Goodbye.mp3",
        cover: "./images/never goodbye cover.jpeg",
    },
    {
        title: "Lucky",
        artist: "EXO",
        src: "./music/Lucky.mp3",
        cover: "./images/lucky cover.jpeg",
    },
    {
        title: "ハルカ (Haruka)",
        artist: "Yoasobi",
        src: "./music/Haruka.mp3",
        cover: "./images/haruka cover.jpeg",
    },
    {
        title: "love.",
        artist: "wave to earth",
        src: "./music/love.mp3",
        cover: "./images/love. cover.jpeg",
    },
    {
        title: "Glue Song",
        artist: "Beabadoobee ft. Clairo",
        src: "./music/Glue Song.mp3",
        cover: "./images/glue song cover.jpeg",
    },
    {
        title: "Love, Maybe",
        artist: "BABYMONSTER",
        src: "./music/Love, Maybe.mp3",
        cover: "./images/love, maybe cover.png",
    },
    {
        title: "There Is a Light That Never Goes Out",
        artist: "The Smiths",
        src: "./music/There Is a Light That Never Goes Out.mp3",
        cover: "./images/there is a light that never goes out cover.jpeg",
    },
    {
        title: "Polaroid Love",
        artist: "ENHYPEN",
        src: "./music/Polaroid Love.mp3",
        cover: "./images/polaroid love cover.jpeg",
    },
    {
        title: "It's Not Living (If It's Not With You)",
        artist: "The 1975",
        src: "./music/It's Not Living.mp3",
        cover: "./images/it's not living cover.jpeg",
    },
    {
        title: "하늘을 나는 꿈 (Heavenly)",
        artist: "NCT Dream",
        src: "./music/Heavenly.mp3",
        cover: "./images/heavenly cover.jpeg",
    },
];

let currentSongIndex = 0;
let currentSongIndex2 = 0;
let isPlaying = false;

const audioPlayer = new Audio(songs[currentSongIndex].src);
const audioPlayer2 = new Audio(songs2[currentSongIndex2].src);
const albumCover = document.getElementById("albumCover");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const albumCover2 = document.getElementById("albumCover2");
const trackTitle2 = document.getElementById("trackTitle2");
const trackArtist2 = document.getElementById("trackArtist2");
const playPauseButton = document.getElementById("playPauseButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const playPauseButton2 = document.getElementById("playPauseButton2");
const prevButton2 = document.getElementById("prevButton2");
const nextButton2 = document.getElementById("nextButton2");

function stopAllPlayers() {
    audioPlayer.pause();
    audioPlayer2.pause();
    playPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    playPauseButton2.innerHTML = '<i class="bi bi-play-fill"></i>';
    isPlaying = false;
}

function updateEmiPlayerUI() {
    const song = songs[currentSongIndex];
    audioPlayer.src = song.src;

    albumCover.classList.add("animate");
    trackTitle.classList.add("animate");
    trackArtist.classList.add("animate");

    setTimeout(() => {
        albumCover.src = song.cover;
        trackTitle.textContent = song.title;
        trackArtist.textContent = song.artist;

        albumCover.classList.remove("animate");
        trackTitle.classList.remove("animate");
        trackArtist.classList.remove("animate");
    }, 500);
}

function updateDapidPlayerUI() {
    const song2 = songs2[currentSongIndex2];
    audioPlayer2.src = song2.src;

    albumCover2.classList.add("animate");
    trackTitle2.classList.add("animate");
    trackArtist2.classList.add("animate");

    setTimeout(() => {
        albumCover2.src = song2.cover;
        trackTitle2.textContent = song2.title;
        trackArtist2.textContent = song2.artist;

        albumCover2.classList.remove("animate");
        trackTitle2.classList.remove("animate");
        trackArtist2.classList.remove("animate");
    }, 500);
}

function togglePlayPause() {
    if (isPlaying) {
        stopAllPlayers();
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
    }
}

function playNextSong() {
    stopAllPlayers();
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateEmiPlayerUI();
}

function playPrevSong() {
    stopAllPlayers();
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateEmiPlayerUI();
}

function togglePlayPause2() {
    if (isPlaying) {
        stopAllPlayers();
    } else {
        audioPlayer2.play();
        playPauseButton2.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
    }
}

function playNextSong2() {
    stopAllPlayers();
    currentSongIndex2 = (currentSongIndex2 + 1) % songs2.length;
    updateDapidPlayerUI();
}

function playPrevSong2() {
    stopAllPlayers();
    currentSongIndex2 = (currentSongIndex2 - 1 + songs2.length) % songs2.length;
    updateDapidPlayerUI();
}

playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPrevSong);

playPauseButton2.addEventListener("click", togglePlayPause2);
nextButton2.addEventListener("click", playNextSong2);
prevButton2.addEventListener("click", playPrevSong2);

document.getElementById("musicPlayerButton").addEventListener("click", function () {
    const musicPlayerPopup = new bootstrap.Modal(document.getElementById("musicPlayerPopup"));
    musicPlayerPopup.show();
});

document.getElementById("dapidMusicPlayerButton").addEventListener("click", function () {
    const dapidMusicPlayerPopup = new bootstrap.Modal(document.getElementById("dapidMusicPlayerPopup"));
    dapidMusicPlayerPopup.show();
});

$(document).ready(function() {
    const envelope = $('#envelope');
    const h1Element = $('.greeting-card1 h1.display-6');
    const messages = ["Haii !", "Hi There !", "Bonjour !", "Ohayou !", "Annyeong !", "Ni Hao !", "Hola !", "Hallo !"];
    let messageIndex = 0;

    envelope.on('click', toggleEnvelope);

    function toggleEnvelope() {
        if (envelope.hasClass("open")) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    }

    function openEnvelope() {
        envelope.removeClass("close").addClass("open");
    }

    function closeEnvelope() {
        envelope.removeClass("open").addClass("close");
    }

    function changeMessage() {
        h1Element.text(messages[messageIndex]);
        messageIndex = (messageIndex + 1) % messages.length;
    }

    setInterval(changeMessage, 700);
});

function showImageDetail(src, title) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageDetailModalLabel').innerText = title;
    const myModal = new bootstrap.Modal(document.getElementById('imageDetailModal'));
    myModal.show();
}
