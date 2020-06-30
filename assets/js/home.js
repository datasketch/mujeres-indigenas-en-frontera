const slider = new Swiper('.swiper-container', {
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 7500,
  },
});

// This is really specific to this website, so efforts to create a general purpose class are dismissed
class Storytelling {
  constructor(container, pinSelector) {
    this.container = container;
    this.pinSelector = pinSelector;
    this.graphics = container.querySelectorAll('.graphic');
    this.lastGraphic = this.graphics[this.graphics.length - 1];
    this.controller = new ScrollMagic.Controller();
  }
  init() {
    this.scene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: this.container,
      duration: this.getContainerHeight(),
    })
      .setPin(this.pinSelector)
      .addTo(this.controller);
    this.listen();
  }
  listen() {
    this.scene.on('enter', () => {
      this.graphics.forEach((graphic, index) => {
        const graphicScene = new ScrollMagic.Scene({
          triggerHook: 0.2,
          triggerElement: graphic,
          duration: '100%',
        }).addTo(this.controller);

        // onLeave
        graphicScene.on('leave', (event) => {
          const el = event.target.triggerElement();
          if (el === this.lastGraphic && event.scrollDirection === 'FORWARD') {
            return;
          }
          const step = document.getElementById(el.dataset.step);
          step.classList.remove('opacity-100');
          step.classList.add('opacity-0');
        });

        // onEnter
        graphicScene.on('enter', (event) => {
          const el = event.target.triggerElement();
          const step = document.getElementById(el.dataset.step);
          step.classList.remove('opacity-0');
          step.classList.add('opacity-100');
        });
      });
    });
  }
  getContainerHeight() {
    return (
      this.container.getBoundingClientRect().height -
      this.lastGraphic.getBoundingClientRect().height
    );
  }
}

const overviewStorytelling = new Storytelling(
  document.getElementById('storytelling'),
  '#steps'
);

const wayuuStorytelling = new Storytelling(
  document.getElementById('storytelling-wayuu'),
  '#steps-wayuu'
);

const gunaduleStorytelling = new Storytelling(
  document.getElementById('storytelling-gunadule'),
  '#steps-gunadule'
);

const tikunaStorytelling = new Storytelling(
  document.getElementById('storytelling-tikuna'),
  '#steps-tikuna'
);

overviewStorytelling.init();
wayuuStorytelling.init();
gunaduleStorytelling.init();
tikunaStorytelling.init();
