

function cursorEffect() {
  var page1docs = document.querySelector(".page1-docs");
  var cursor = document.querySelector("#cursor");

  page1docs.addEventListener("mousemove", function (e) {
    // cursor.style.top = e.pageY + "px";
    // cursor.style.left = e.pageX + "px";

    gsap.to(cursor, {
      x: e.pageX,
      y: e.pageY,
      duration: 0.5,
    });
  });

  page1docs.addEventListener("mouseenter", function (e) {
    gsap.to(cursor, {
      scale: 1,
      opacity: 0.7,
    });
  });
  page1docs.addEventListener("mouseleave", function (e) {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 60,
    shadowScale: 1,
  },
});

var t1 = gsap.timeline();
t1.from(".greeting", {
  y: -40,
  opacity: 0,
  duration: 5,
  stagger: 0.1,
});
t1.to(".greeting", {
  y: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

var t2 = gsap.timeline();
t2.from(".allofyou", {
  y: 40,
  opacity: 0,
  duration: 5,
  delay: 1,
  stagger: 0.1,
});
t2.to(".allofyou", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

var t3 = gsap.timeline();
t3.from(".name", {
  x: -40,
  opacity: 0,
  duration: 5,
  delay: 2,
  stagger: 0.1,
});
t3.to(".name", {
  x: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
t3.to(".loader", {
  opacity: 0,
});
t3.to(".loader", {
  display: "none",
});
t3.from(".page1-docs h1 span", {
  y: 40,
  opacity: 0,
  duration: 5,
  stagger: 0.2,
});
t3.to(".page1-docs h1 span", {
  opacity: 1,
});



