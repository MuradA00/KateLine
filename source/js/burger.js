
const infoBlock = document.querySelector('.descr-block')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('_burger-active')

  if (burger.classList.contains('_burger-active')) {
    infoBlock.classList.add('--fade-left')
    menu.classList.add('--menu-active')
    menu.classList.remove('--wanish')
  } else {
    infoBlock.classList.remove('--fade-left')
    menu.classList.add('--wanish')
    menu.classList.remove('--menu-active')
  }
})
