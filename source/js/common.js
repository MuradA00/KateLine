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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



// function init() {
//   new SmoothScroll(document, 120, 15);
// }

// function SmoothScroll(target, speed, smooth) {
//   if (target === document)
//     target =
//       document.scrollingElement ||
//       document.documentElement ||
//       document.body.parentNode ||
//       document.body; // cross browser support for document scrolling

//   var moving = false;
//   var pos = target.scrollTop;
//   var frame =
//     target === document.body && document.documentElement
//       ? document.documentElement
//       : target; // safari is the new IE

//   target.addEventListener("mousewheel", scrolled, { passive: false });
//   target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

//   function scrolled(e) {
//     e.preventDefault(); // disable default scrolling

//     var delta = normalizeWheelDelta(e);

//     pos += -delta * speed;
//     pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

//     if (!moving) update();
//   }

//   function normalizeWheelDelta(e) {
//     if (e.detail) {
//       if (e.wheelDelta)
//         return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
//       // Opera
//       else return -e.detail / 3; // Firefox
//     } else return e.wheelDelta / 120; // IE,Safari,Chrome
//   }

//   function update() {
//     moving = true;

//     var delta = (pos - target.scrollTop) / smooth;

//     target.scrollTop += delta;

//     if (Math.abs(delta) > 0.5) requestFrame(update);
//     else moving = false;
//   }

//   var requestFrame = (function () {
//     // requestAnimationFrame cross browser
//     return (
//       window.requestAnimationFrame ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame ||
//       window.oRequestAnimationFrame ||
//       window.msRequestAnimationFrame ||
//       function (func) {
//         window.setTimeout(func, 1000 / 50);
//       }
//     );
//   })();
// }

// window.addEventListener("DOMContentLoaded", init);

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

AOS.init();

const navLinks = document.querySelectorAll('.nav__link')

for(let i = 0; i < navLinks.length; i++) {
 const navLink = navLinks[i];
 navLink.addEventListener('mouseover', () => {
  navLink.classList.add('--is-active')
 })
 navLink.addEventListener('mouseout', () => {
  navLink.classList.remove('--is-active')
 })
}


const desktopBreakpoint = window.matchMedia("(min-width: 550px)")
const mobBreakpoint = window.matchMedia("(max-width: 549px)")

if (desktopBreakpoint.matches === true) {
  const advItems = document.querySelectorAll('.advantages-list__item')
  console.log('dalbaeb')
  for(let i = 0; i < advItems.length; i++) {
    const adItem = advItems[i];
    adItem.addEventListener('mouseover', function() {
      adItem.classList.add('_animOn')
      adItem.classList.remove('_animOff')
    })
    adItem.addEventListener('mouseout', function() {
      adItem.classList.remove('_animOn')
      adItem.classList.add('_animOff')
    })
  }
}

if (mobBreakpoint.matches === true ) {
  var blocks = document.querySelectorAll('.advantages-list__item');
console.log(blocks);
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight / 6 * 3;
  blocks.forEach(function (block) {
    var blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      blocks.forEach(item => item.classList.remove('_mobAnimOn'))
      block.classList.add('_mobAnimOn');
      block.classList.remove('_mobAnimOff')
    }
    if (blockTop == triggerBottom) {
      block.classList.remove('_mobAnimOn');
      block.classList.add('_mobAnimOff')
    }
  });
}
}
