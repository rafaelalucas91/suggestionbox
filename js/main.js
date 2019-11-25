window.addEventListener("load", event => {

    const btnSend = document.querySelector('.send'),
        input = document.querySelector('input'),
        textarea = document.querySelector('textarea'),
        wrapper = document.querySelector('.wrapper'),
        envelopeWrapper = document.querySelector('.wrapperEnvelope'),
        wrapperMailbox = document.querySelector('.wrapperMailbox'),
        formError = document.querySelector('.paper__formError');

    const events = () => {
        btnSend.addEventListener('click', foldPaper);
        input.addEventListener('keyup', errorValidation);
        textarea.addEventListener('keyup', errorValidation);
    }

    const foldPaper = () => {

        if (!input.value || !textarea.value) {
            formError.classList.add('showError');
            return;
        }

        wrapper.classList.add('animeAll');
        wrapperMailbox.classList.add('animeMailbox');
        btnSend.style.display = "none";

        setTimeout(() => {
            envelopeWrapper.classList.add('overflow');
        }, 3500);

        setTimeout(() => {
            input.value = "";
            textarea.value = "";
            btnSend.style.display = "block";
            wrapper.classList.remove('animeAll');
            wrapperMailbox.classList.remove('animeMailbox');

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