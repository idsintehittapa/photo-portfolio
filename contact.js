const timeLine = gsap.timeline({ defaults: { ease: "power1.out" } })

timeLine.to('.contact__intro__text-visible', {y: '0%', duration: 1, stagger: 0.25})
timeLine.to('.contact__slider', {y: '-100%', duration: 1.5, delay: 0.8})
timeLine.to('.contact__intro', {y: '-100%', duration: 1}, '-=1')
timeLine.fromTo(".contact__big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");