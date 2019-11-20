window.addEventListener("load", event => {
    var btnSend = document.querySelector('.send'),
        paper = document.querySelector('.paper'),
        form = document.querySelector('.paper__form'),
        input = document.querySelector('input'),
        textarea = document.querySelector('textarea');

    btnSend.addEventListener('click', foldPaper);

    function foldPaper() {
        paper.classList.add('fold');
        form.classList.add('fade');
        btnSend.style.display = "none";
        input.value = "";
        textarea.value = "";


        setTimeout(function () {
            paper.classList.remove('fold');
            btnSend.style.display = "block";
            form.classList.remove('fade');
        }, 2000);
    }

});