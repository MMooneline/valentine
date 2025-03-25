function togglePopup1() {
    var popup = new bootstrap.Modal(document.getElementById('popup1'));
    popup.show();
}

function togglePopup2() {
    var popup2 = new bootstrap.Modal(document.getElementById('popup2'));
    popup2.show();
}

const songs = [
    {
        title: "Take A Chance",
        artist: "fromis_9",
        src: "./music/Take a Chance.mp3",
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

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = new Audio(songs[currentSongIndex].src);
const albumCover = document.getElementById("albumCover");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const playPauseButton = document.getElementById("playPauseButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updatePlayerUI() {
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

// Play or pause the music
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
    isPlaying = !isPlaying;
}

// Play the next song
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayerUI();
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    isPlaying = true;
}

// Play the previous song
function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayerUI();
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    isPlaying = true;
}

// Event listeners
playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPrevSong);

// Show the music player popup
document.getElementById("musicPlayerButton").addEventListener("click", function () {
    const musicPlayerPopup = new bootstrap.Modal(document.getElementById("musicPlayerPopup"));
    musicPlayerPopup.show();

    if (!isPlaying) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isPlaying = true;
    }
});

document.getElementById("musicPlayerPopup").addEventListener("hidden.bs.modal", function () {
    
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
    var myModal = new bootstrap.Modal(document.getElementById('imageDetailModal'));
    myModal.show();
}

const musicButton = document.getElementById('musicPlayerButton');
const music = document.getElementById('backgroundMusic');

const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = 0.5;
