function togglePopup() {
    var popup = new bootstrap.Modal(document.getElementById('popup'));
    popup.show();
}

$(document).ready(function() {
    const envelope = $('#envelope');
    const h1Element = $('.greeting-card h1.display-6');
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