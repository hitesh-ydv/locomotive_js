function videoAnimations() {
  var videoCon = document.getElementById("video-container");
  var playBtn = document.getElementById("div-play");

  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.clientX,
      top: dets.clientY,
    });
  });
}
videoAnimations();

function animate(){
  document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.7,
      stagger: 0.3,
    });
  
    gsap.from(".page1 .video-container", {
      scale: 0.8,
      opacity: 0,
      delay: 1.4,
      duration: 0.3,
      stagger: 0.3,
    });
  });
}
animate();


const scroll = new LocomotiveScroll({
  el: document.querySelector('.div-main'),
  smooth: true
});




