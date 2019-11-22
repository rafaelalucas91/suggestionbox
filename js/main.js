window.addEventListener("load", event => {

    const btnSend = document.querySelector('.send'),
        paper = document.querySelector('.paper'),
        form = document.querySelector('.paper__form'),
        input = document.querySelector('input'),
        textarea = document.querySelector('textarea'),
        envelope = document.querySelector('.envelope'),
        envelopeBack = document.querySelector('.envelopeBack'),
        envelopeWrapper = document.querySelector('.wrapperEnvelope')
    formError = document.querySelector('.paper__formError');

    const events = () => {
        btnSend.addEventListener('click', foldPaper);
        input.addEventListener('keyup', errorValidation);
        textarea.addEventListener('keyup', errorValidation);
    }

    const foldPaper = () => {

        if (!input.value || !textarea.value) {
            formError.classList.add('showError');
            //return;
        }

        paper.classList.add('fold');
        form.classList.add('fade');
        btnSend.style.display = "none";
        envelope.classList.add('animeEnvelope');
        envelopeBack.classList.add('show');
        envelopeWrapper.classList.add('animeEnvelopeWrapper');
        setTimeout(() => {
            envelopeWrapper.classList.add('overflow');
        }, 3500);

        setTimeout(() => {
            input.value = "";
            textarea.value = "";
            paper.classList.remove('fold');
            btnSend.style.display = "block";
            form.classList.remove('fade');
            envelope.classList.remove('animeEnvelope');
            envelopeBack.classList.remove('show');
            envelopeWrapper.classList.remove('animeEnvelopeWrapper');


        }, 200000);
    }

    const errorValidation = (event) => {
        const currentTarget = event.currentTarget;
        if (currentTarget.value) {
            formError.classList.remove('showError');
        }
    }


    events();
});