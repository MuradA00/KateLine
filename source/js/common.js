let lightningRow = new Swiper(".lightning__row", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 700,
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.dots__inner',
      clickable: true,
    },
    breakpoints: {
      688: {
        slidesPerView: 2,
        spaceBetween: 21,
        centeredSlides: false,
      },
      320: {
        slidesPerView: 1
      },
      1246: {
        slidesPerView: 'auto',
        spaceBetween: 21
      }
    },
});


let worksRow = new Swiper(".works__inner", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    effect: 'fade',
    speed: 500,
    fadeEffect: { crossFade: true },
});

let homeSlider = new Swiper(".home__inner", {
    slidesPerView: 'auto',
    direction: 'vertical',
    spaceBetween: 20,
    effect: 'fade',
    allowTouchMove: false,
    speed: 500,
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.home-dots__inner',
      clickable: true,
    },
});



function init() {
  new SmoothScroll(document, 120, 15);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

window.addEventListener("DOMContentLoaded", init);

const modalTriggers = document.querySelectorAll('.trigger-modal')
const modal = document.getElementById('modal')
const closeIcon = document.querySelector('.modal__close')

for(let i = 0; i < modalTriggers.length; i++) {
  const modalButton = modalTriggers[i];
  modalButton.addEventListener('click', function() {
    modal.classList.add('--show-modal')
  })
  closeIcon.addEventListener('click', () => {
    closeModal();
  })
}

function closeModal() {
  modal.classList.remove('--show-modal')
}

