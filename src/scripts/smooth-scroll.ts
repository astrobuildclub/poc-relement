import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Smooth scroll met Lenis, gesynchroniseerd met GSAP ScrollTrigger */
function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) lenis.scrollTo(value);
      return lenis.scroll;
    },
  });
  ScrollTrigger.refresh();

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

/** Fade-in animatie voor secties bij in beeld scrollen */
function initSectionReveals() {
  const sections = document.querySelectorAll<HTMLElement>('.content > section');

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        immediateRender: false, // from-state pas toepassen wanneer animatie start (geen flits)
        scrollTrigger: {
          trigger: section,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

function init() {
  initSmoothScroll();
  initSectionReveals();
}

init();
