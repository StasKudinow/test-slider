const sliderLine = document.querySelector('.slider__line');
const buttonPrev = document.querySelector('.promo__button_prev');
const buttonNext = document.querySelector('.promo__button_next');
const sliderImages =document.querySelectorAll('.slider__image');

let offset = 0;
let i = 0;

buttonPrev.addEventListener('click', () => {
  offset -= 337;
  if (offset < 0) {
    offset = 1388;
  }
  sliderLine.style.left = -offset + 'px';
  sliderImages[i].classList.remove('slider__image_large');
  if (i === 0) {
    i = 4;
  } else {
    i--;
  };
  sliderImages[i].classList.add('slider__image_large');
});

buttonNext.addEventListener('click', () => {
  offset += 337;
  if (offset > 1388) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
  sliderImages[i].classList.remove('slider__image_large');
  if (i === 4) {
    i = 0;
  } else {
    i++;
  };
  sliderImages[i].classList.add('slider__image_large');
});
