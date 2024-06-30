window.onscroll = function () {
  const header = document.querySelector('header');
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function () {
  hamberger.classList.toggle('hamberger-active');
  navMenu.classList.toggle('hidden');
});

// klik di luar hamberger
window.addEventListener('click', function (e) {
  if (e.target != hamberger && e.target != navMenu) {
    hamberger.classList.remove('hamberger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah kan toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
