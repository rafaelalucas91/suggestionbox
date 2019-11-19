window.addEventListener("load", event => {
    var btnSend = document.querySelector('.send'),
        paper = document.querySelector('.paper');

    btnSend.addEventListener('click', foldPaper);

    function foldPaper() {
        paper.classList.add('fold');
        btnSend.style.display = "none";

        setTimeout(function () {
            paper.classList.remove('fold');
            btnSend.style.display = "block";
        }, 2000);
    }

});