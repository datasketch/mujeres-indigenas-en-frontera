const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const slider = new Swiper('.swiper-container', {});

buttonNext.addEventListener('click', function () {
  slider.slideNext();
});

buttonPrev.addEventListener('click', function () {
  slider.slidePrev();
});