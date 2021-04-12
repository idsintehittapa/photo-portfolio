// Carousel-slider Cinemagrah
// Adding window.onload all the videos are loaded before the width is calculated
// making the slides work!
// https://stackoverflow.com/questions/57981312/clientwidth-width-in-javascript-is-not-working-on-img-tag

window.onload = () => {

  const carouselSlide = document.querySelector('.portfolio__carousel-slide')
  const carouselVideo = document.querySelectorAll('.portfolio__carousel-slide video')
  
  // Counter Cinemagrah
  let counter = 1
  const size = carouselVideo[0].clientWidth
  
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  console.log(size)
  
  // Buttons Carousel-slider Cinemagrah
  const prevBtn = document.querySelector('#prevBtn')
  const nextBtn = document.querySelector('#nextBtn')
  
  // Button listeners 
  nextBtn.addEventListener('click', () => {
    if (counter >= carouselVideo.length -1) return 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
      counter++;
    console.log(counter, size)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  })
  
  prevBtn.addEventListener('click', () => {
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  })
  
  carouselSlide.addEventListener('transitionend', () => {
    if (carouselVideo[counter].id === "lastClone") {
      carouselSlide.style.transition = "none"
      counter = carouselVideo.length - 2
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (carouselVideo[counter].id === "firstClone") {
      carouselSlide.style.transition = "none"
      counter = carouselVideo.length - counter
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
  })
  }