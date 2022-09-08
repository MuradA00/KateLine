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
    speed: 800,
    navigation: {
      nextEl: '._btn-next',
      prevEl: '._btn-prev',
    },
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

const homeBody = document.querySelector('.home__body')

const setHeight = () => {
  document.getElementById("home-page").style.minHeight = window.innerHeight + "px"
};
let deviceWidth = window.matchMedia("(max-width: 4000px)");
if (deviceWidth.matches) {
  window.addEventListener("resize", setHeight);
  setHeight();
}







