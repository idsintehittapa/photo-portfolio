/// this is to open the other portfolio projects
const arrow = document.querySelector(".main__portfolio-links button")
const arrowLinks = document.querySelector(".main__portfolio-links ul")
const links = document.querySelectorAll(".main__portfolio-links li")

arrow.addEventListener('click', () => {
  arrowLinks.classList.toggle('open')
  links.forEach(link => {
    link.classList.toggle('fade')
  })
})


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
    counter = carouselVideo.length - 1
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }
  if (carouselVideo[counter].id === "firstClone") {
    carouselSlide.style.transition = "none"
    counter = carouselVideo.length - counter
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
  }
})
}

// ////  JavaScript function that resizes an item so that it is just 
// // large enough to display all the content within it.
// // This function resizes items individually
// // from https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb


/// https://w3bits.com/css-grid-masonry/

// function resizeGridItem(item){
//   grid = document.getElementsByClassName("portfolio__masonry")[0]
//   rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
//   console.log(rowHeight)
//   rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
//   console.log(rowGap)
//   rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap))
//   console.log(rowSpan)
//   item.style.gridRowEnd = "span "+rowSpan
// }

// // ///  a function that allows all items to be resized at once. 
// // // This function finds all the items in the grid and loops 
// // // through calling the individual resize function on each one.

// function resizeAllGridItems(){
//   allItems = document.getElementsByClassName("portfolio__item");
//   for(x=0;x<allItems.length;x++){
//     resizeGridItem(allItems[x]);
//   }
// }

// window.onload = resizeAllGridItems();
// window.addEventListener("resize", resizeAllGridItems);

// // allItems = document.getElementsByClassName("portfolio__item");
// // for(x=0;x<allItems.length;x++){
// //   imagesLoaded( allItems[x], resizeInstance);
// // }

// // function resizeInstance(instance){
// //   item = instance.elements[0];
// //   resizeGridItem(item);
// // }