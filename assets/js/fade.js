/* ================================= */
  /* :::::::: Bespoke ::::::::: */
  /* ================================= */

  const element = document.querySelector('.element-to-animate');
  const elementPosition = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  function fadeInOnScroll() {
      if (elementPosition.top < viewportHeight) {
          element.classList.add('fadeInLeft');
          window.removeEventListener('scroll', fadeInOnScroll);
      }
  }

  window.addEventListener('scroll', fadeInOnScroll);
;
