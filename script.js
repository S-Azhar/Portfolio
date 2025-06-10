gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".Nav-list a", {
  x: -30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.3
});

// Intro Info
gsap.from(".Intro-Info p", {
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.1
});

// Image
gsap.from(".My-image", {
  y: -50,
  rotate: 45,
  duration: 1,
  scale: 0.5,
  opacity: 0
});

// About Image
gsap.from("#About img", {
  x: -100,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#About img",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});

// About Title
gsap.from("#About .About-info .about-Titel", {
  x: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#About .About-info",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});

// About Paragraph
gsap.from("#About .About-info .about-paragraph", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#About .About-info .about-paragraph",
    start: "top 70%",
    end: "top 40%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});

