// /// Nav menu
// const plus = document.querySelector('.site__nav-button')
// const navLinks = document.querySelector('.site__nav-list')
// const navLinksLi = document.querySelectorAll('.site__nav-link')

// plus.addEventListener('click', () => {
//   navLinks.classList.toggle('open')
// })

// /// this is to open the other portfolio projects
// const arrow = document.querySelector(".main__portfolio-links button")
// const arrowLinks = document.querySelector(".main__portfolio-links ul")
// const links = document.querySelectorAll(".main__portfolio-links li")

// arrow.addEventListener('click', () => {
//   arrowLinks.classList.toggle('open')
//   links.forEach(link => {
//     link.classList.toggle('fade')
//   })
// })

// Teeth Slider
const slider = document.querySelector('.slider')
const before = document.querySelector('.teeth__img-before')
const after = document.querySelector('.teeth__img-after')
const container = document.querySelector('.teeth__container')

const drag = (event) => {
  let xPos = event.layerX
  let sliderSize = container.offsetWidth
  after.style.width = xPos + 'px'
  slider.style.left = xPos + 'px'

  if (xPos < 50) {
    after.style.width = 0
    slider.style.left = 0
  }

  if (xPos + 50 > sliderSize) {
    after.style.width = sliderSize + 'px'
    slider.style.left = sliderSize + 'px'
  }
}

container.addEventListener('mousemove', drag)
container.addEventListener('touchmove', drag)
