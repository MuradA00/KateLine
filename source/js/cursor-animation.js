const blockGallery = document.querySelectorAll('.lightning-list__item')

for(let i = 0; i < blockGallery.length; i ++) {
  const blockImage = blockGallery[i];
  blockImage.addEventListener('mouseover', () => {
    blockImage.classList.add('_disable-anim')
    blockImage.classList.remove('_active-anim')
  })
  blockImage.addEventListener('mouseout', () => {
    blockImage.classList.add('_active-anim')
    blockImage.classList.remove('_disable-anim')
  })
}




