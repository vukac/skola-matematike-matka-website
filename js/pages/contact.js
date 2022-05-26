const formEl = document.querySelector('.form');
const formResponseEl = document.querySelector('.form__response');

const formSubmitHandler = () => {
  formEl.addEventListener('submit', event => {
    event.preventDefault();

    formResponseEl.textContent = '';
    formResponseEl.className = '';

    const data = new FormData(event.target);

    formResponseEl.textContent = 'Samo trenutak strpljenja ...';

    fetch('https:formsubmit.co/ajax/b39dee304440a0c596b99e619cf32f6c', {
      method: 'POST',
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(() => {
        formResponseEl.classList.add('form__response--success');
        formResponseEl.textContent = 'Uspješno ste poslali poruku 👍';
      })
      .catch(() => {
        formResponseEl.classList.add('form__response--error');
        formResponseEl.textContent =
          'Nažalost, poruka se nije uspjela poslati 😕 Pokušajte ponovno kasnije 🙂 ';
      });
  });
};

formSubmitHandler();
