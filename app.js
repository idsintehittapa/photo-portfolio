/// Nav menu
const plus = document.querySelector('.site__nav-button')
const navLinks = document.querySelector('.site__nav-list')
const navLinksLi = document.querySelectorAll('.site__nav-link')

plus.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

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