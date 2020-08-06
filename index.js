// carousel
  const config = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
  }

  new Glide('.glide', config).mount()

// menu option
const down = document.querySelector('.down');
const proMenu = document.querySelector('.product-menu');

down.addEventListener('click', () => {
  proMenu.classList.toggle('show');
})

// hamburger menu
const menu = document.querySelector('.nav-center');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

function menuContent() {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
  close.classList.toggle('show');
}

hamburger.addEventListener('click', menuContent)

close.addEventListener('click', menuContent)
