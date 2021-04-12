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
