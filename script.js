function togglePopup1() {
    var popup = new bootstrap.Modal(document.getElementById('popup1'));
    popup.show();
}

function togglePopup2() {
    var popup2 = new bootstrap.Modal(document.getElementById('popup2'));
    popup2.show();
}

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

musicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicButton.textContent = '⏸️';
    } else {
        music.pause();
        musicButton.textContent = '▶️';
    }
});

const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = 0.5;
