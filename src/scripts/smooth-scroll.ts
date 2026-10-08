import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let revealsCtx: gsap.Context | null = null;
let tickerBound = false;

/** Smooth scroll met Lenis, gesynchroniseerd met GSAP ScrollTrigger */
function ensureLenis() {
  if (lenis) {
    lenis.start();
    return lenis;
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) lenis!.scrollTo(value);
      return lenis!.scroll;
    },
  });

  if (!tickerBound) {
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    tickerBound = true;
  }

  return lenis;
}

/** Fade-in animatie voor secties bij in beeld scrollen */
function initSectionReveals() {
  revealsCtx?.revert();
  revealsCtx = gsap.context(() => {
    const sections = document.querySelectorAll<HTMLElement>(".content > section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  });
}

function cleanup() {
  revealsCtx?.revert();
  revealsCtx = null;
  lenis?.stop();
}

function init() {
  const instance = ensureLenis();
  instance.scrollTo(0, { immediate: true });
  initSectionReveals();
  ScrollTrigger.refresh();
}

// Lenis stoppen via lifecycle (niet via onLeave): anders skippen we native view transitions.
document.addEventListener("astro:before-preparation", () => {
  lenis?.stop();
});
document.addEventListener("astro:before-swap", cleanup);
document.addEventListener("page:transition-end", init);
