// This file only for GSAP animation
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".navbar-menu li", {
    x: 100,
    opacity: 0,
    duration: 1,
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
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});


gsap.from(".Education-titel", {
  x: -100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".Education-titel ",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});

gsap.from("#education-box1", {
  x: 500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#Education #education-box1",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});


gsap.from("#education-box2", {
  x: -500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#Education #education-box2",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
   // markers: true
  }
});


gsap.from(".Skills-titel", {
  x: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".Skills-titel ",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});

gsap.from(".column h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".column h2",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
    // markers: true
  }
});


gsap.from(".skills-collection li", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#Skills .skills-collection li",
    start: "top 70%",
    end: "top 45%",
    toggleActions: "play none none reverse",
    scrub:2,
    // markers: true
  }
});


gsap.from(".Project-titel", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".Project-titel",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    // markers: true
  }
});

gsap.from("#project1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".Project-info",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    scrub: 2,
   //markers: true
  }
});


gsap.from("#Project #project2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#Project #project2",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
    // markers: true,
    scrub: 2,
  }
});