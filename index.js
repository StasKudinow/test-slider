const buttonPrev = document.querySelector('.promo__button_prev');
const buttonNext = document.querySelector('.promo__button_next');
const sliderLine = document.querySelector('.slider__line');
const sliderImages = document.querySelectorAll('.slider__image');

let offset = 0;
let i = 0;

function moveRight() {
  offset += 337;
  if (offset > 2040) {
    offset = 0;
  };
  sliderLine.style.left = -offset + 'px';
};

function moveLeft() {
  offset -= 337;
  if (offset < 0) {
    offset = 2040;
  };
  sliderLine.style.left = -offset + 'px';
};

function resizeRight() {
  sliderImages[i].classList.remove('slider__image_large');
  if (i === 6) {
    i = 0;
  } else {
    i++;
  };
  sliderImages[i].classList.add('slider__image_large');
};

function resizeLeft() {
  sliderImages[i].classList.remove('slider__image_large');
  if (i === 0) {
    i = 6;
  } else {
    i--;
  };
  sliderImages[i].classList.add('slider__image_large');
};

buttonNext.addEventListener('click', () => {
  moveRight();
  resizeRight();
});

buttonPrev.addEventListener('click', () => {
  moveLeft();
  resizeLeft();
});
