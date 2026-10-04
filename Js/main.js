/* gsap.from(".titulo", {
  x: "-100vw",
  duration: 1.1,
  ease: "power.out(1, 0.5)",
  delay: 0.1,
});
gsap.from(".Fotografia-Brennan", {
  y: "100vw",
  duration: 0.8,
  ease: "power.out(1, 0.5)",
  delay: 0.1,
});
gsap.from(".Fotografia-Brennan", {
  y: "100vw",
  duration: 0.8,
  ease: "power.out(1, 0.5)",
  delay: 0.1,
});
/* gsap.from(".main", {
  y: "100vw",
  duration: 0.8,
  ease: "power.out(1, 0.5)",
  delay: 0.1,
});
 */

/*Pegar este código en el archivo de javascript*/

  document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".menu-nav-mobile");

    boton.addEventListener("click", function () {
      menuLinks.classList.toggle("open");
    });
  });
