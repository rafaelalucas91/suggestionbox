window.addEventListener("load", event => {

  const btnSend = document.querySelector('.send'),
    btnAnother = document.querySelector('.another'),
    input = document.querySelector('input'),
    textarea = document.querySelector('textarea'),
    wrapper = document.querySelector('.wrapper'),
    envelopeWrapper = document.querySelector('.wrapperEnvelope'),
    wrapperMailbox = document.querySelector('.wrapperMailbox'),
    formError = document.querySelector('.paper__formError'),
    reload = document.querySelector('.reload');



  const showEasterEgg = ({ keyCode }) => {
    if (keyCode == 117) {
      addEasterEgg();
    }
  }

  const foldPaper = () => {

    if (!input.value || !textarea.value) {
      formError.classList.add('showError');
      return;
    }

    wrapper.classList.add('animeAll');
    wrapperMailbox.classList.add('animeMailbox');

    setTimeout(() => {
      envelopeWrapper.classList.add('overflow');
    }, 3500);

    setTimeout(() => {
      reload.classList.add('animeReload');
    }, 6000);
  }

  const sendMessage = () => {
    foldPaper();

    const emailEndpoint = 'https://functionstestlogs.azurewebsites.net/api/SendEmail?code=1k9alxFBsZFlF0mHUlV/1wG58CLO0Xo79aoAZOh4af1p1SWi3fkCgQ==';
    const data = JSON.stringify({
      "fromName": input.value,
      "toEmail": 'ricardo.melo@fullsix.pt',
      "fromEmail": "caixadesugestoes@fullsix.pt",
      "emailSubject": `Nova mensagem da caixa de sugestões`,
      "emailMessage": textarea.value
    });
    fetch(emailEndpoint, {
      method: 'post',
      body: data
    })
  }

  const errorValidation = ({ currentTarget }) => {
    const { value } = currentTarget;
    if (value) {
      formError.classList.remove('showError');
    }
  }

  const sendAnother = () => {
    input.value = "";
    textarea.value = "";
    reload.classList.remove('animeReload');
    wrapperMailbox.classList.remove('animeMailbox');
    envelopeWrapper.classList.remove('overflow');


    setTimeout(() => {
      wrapper.classList.remove('animeAll');
    }, 500);
  }

  const addEasterEgg = () => {

    const body = document.querySelector('body');


    const template = `
            <div class="easterEgg">
            <img src="assets/fullsixlogo.svg" alt="">
            </div>`;

    body.insertAdjacentHTML('afterbegin', template);

    setTimeout(() => {

      document.querySelector('.easterEgg').remove();

    }, 1000);

  }

  // PWA 

  const serviceWorker = () => {
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('sw.js')
      } catch (error) { }
    }
  }

  btnSend.addEventListener('click', sendMessage);
  btnAnother.addEventListener('click', sendAnother);
  input.addEventListener('keyup', errorValidation);
  textarea.addEventListener('keyup', errorValidation);
  window.addEventListener("keyup", showEasterEgg);

});