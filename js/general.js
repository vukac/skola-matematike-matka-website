const navbarEl = document.querySelector('.navbar');
const navbarBtnEl = document.querySelector('.navbar__btn');

// Toggle navigation
const toggleNav = () => {
  navbarBtnEl.addEventListener('click', function () {
    navbarEl.classList.toggle('nav-open');
  });
};

toggleNav();
