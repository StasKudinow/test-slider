const buttonPrev = document.querySelector('.promo__button_prev');
const buttonNext = document.querySelector('.promo__button_next');
const sliderLine = document.querySelector('.slider__line');
const sliderImages = document.querySelectorAll('.slider__image');
const images = Array.from(sliderImages);

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
  images[i].classList.remove('slider__image_large');
  if (i === 6) {
    i = 0;
  } else {
    i++;
  };
  images[i].classList.add('slider__image_large');
};

function resizeLeft() {
  images[i].classList.remove('slider__image_large');
  if (i === 0) {
    i = 6;
  } else {
    i--;
  };
  images[i].classList.add('slider__image_large');
};

function reduceImg() {
  images.forEach((image) => {
    if (image.classList.contains('slider__image_large')) {
      image.classList.remove('slider__image_large');
    };
  });
};

buttonNext.addEventListener('click', () => {
  reduceImg();
  moveRight();
  resizeRight();
});

buttonPrev.addEventListener('click', () => {
  reduceImg();
  moveLeft();
  resizeLeft();
});

images.forEach((image) => {
  image.addEventListener('click', () => {
    const index = images.indexOf(image);
    i = index;
    offset = i*337;
    sliderLine.style.left = -offset + 'px';
    reduceImg();
    image.classList.add('slider__image_large');
  });
});
