const slider = new Swiper('.swiper-container', {
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 7500,
  },
});

const storytellingContainer = document.getElementById('storytelling');
const graphics = document.querySelectorAll('.graphic');
const lastGraphic = graphics[graphics.length - 1];
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerHook: 0,
  triggerElement: storytellingContainer,
  duration:
    storytellingContainer.getBoundingClientRect().height -
    lastGraphic.getBoundingClientRect().height,
})
  .setPin('#steps')
  .addTo(controller);

scene.on('enter', function () {
  graphics.forEach(function (graphic, index) {
    const graphicScene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: graphic,
      duration: '100%',
    }).addTo(controller);

    // onLeave
    graphicScene.on('leave', function (event) {
      const el = event.target.triggerElement();
      if (el === lastGraphic && event.scrollDirection === 'FORWARD') {
        return;
      }
      const step = document.getElementById(el.dataset.step);
      step.classList.remove('opacity-100');
      step.classList.add('opacity-0');
    });

    // onEnter
    graphicScene.on('enter', function (event) {
      const el = event.target.triggerElement();
      const step = document.getElementById(el.dataset.step);
      step.classList.remove('opacity-0');
      step.classList.add('opacity-100');
    });
  });
});
