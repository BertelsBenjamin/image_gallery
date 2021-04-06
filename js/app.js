// VARIABLES
const current = document.querySelector('#current');
const imgWrapper = document.querySelector('.imgs');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

// FUNCTIONS
const imgClick = (e) => {
  imgs.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add('fade-in');

  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);

  e.target.style.opacity = opacity;
};

imgWrapper.addEventListener('click', (e) => {
  e.target.tagName === 'IMG' ? imgClick(e) : null;
});
