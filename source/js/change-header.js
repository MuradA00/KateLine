window.addEventListener('scroll', function() {
  const header = document.querySelector('.header')
  const advSection = document.querySelector('.advantages')
  let screenPos = window.innerHeight;
  let advSectionPos = advSection.getBoundingClientRect().top;
  if (advSectionPos < screenPos / 4) {
    header.classList.add('_change-header')
  } else {
      header.classList.remove('_change-header')
  }
})
