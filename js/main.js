window.addEventListener("load", event => {
    var btnSend = document.querySelector('.send'),
        paper = document.querySelector('.paper'),
        form = document.querySelector('.paper__form'),
        input = document.querySelector('input'),
        textarea = document.querySelector('textarea'),
        envelope = document.querySelectorAll('.envelope'),
        teste = document.querySelector('.teste');

    btnSend.addEventListener('click', foldPaper);
    teste.addEventListener('click', teste1);

    function foldPaper() {
        paper.classList.add('fold');
        form.classList.add('fade');
        btnSend.style.display = "none";
        input.value = "";
        textarea.value = "";


        envelope.forEach(function (el) {
            el.classList.add('animeEnvelope');
        });


        setTimeout(function () {
            paper.classList.remove('fold');
            btnSend.style.display = "block";
            form.classList.remove('fade');
            envelope.forEach(function (el) {
                el.classList.add('animeEnvelope');
            });
        }, 200000);
    }


    function teste1() {
        if (envelope.classList.contains('openEnvelope')) {
            envelope.classList.remove('openEnvelope');
            envelope.classList.add('closeEnvelope');
        } else {
            envelope.classList.remove('closeEnvelope');
            envelope.classList.add('openEnvelope');
        }
    }

});