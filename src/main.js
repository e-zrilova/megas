const firstSectionSliderCmp = document.querySelector('.js-first-section-slider');

if (firstSectionSliderCmp) {
  const firstScreenSlider = new Swiper(firstSectionSliderCmp, {
    effect: 'fade',
    navigation: {
      nextEl: '.js-first-section-slider-right',
      prevEl: '.js-first-section-slider-left',
    },
  });

  const firstSliderTexts = document.querySelectorAll('.first-section__text');

  firstScreenSlider.on('activeIndexChange', function (event) {
    Array.prototype.forEach.call(firstSliderTexts, (item) => item.classList.remove('js-active'))
    firstSliderTexts[event.activeIndex].classList.add('js-active')
  })
}

const promoSliderCmp = document.querySelector('.js-promo-slider');

if (promoSliderCmp) {
  const promoSlider = new Swiper(promoSliderCmp, {
    effect: 'fade',
    navigation: {
      nextEl: '.js-promo-slider-right',
      prevEl: '.js-promo-slider-left',
    },
  });

  const promoSliderTexts = document.querySelectorAll('.js-promo-text-item');

  promoSlider.on('activeIndexChange', function (event) {
    Array.prototype.forEach.call(promoSliderTexts, (item) => item.classList.remove('js-active'))
    promoSliderTexts[event.activeIndex].classList.add('js-active')
  })
}


const services = document.querySelectorAll('.js-service');
const servicesImg = document.querySelectorAll('.js-service-img');
const serviceDrawers = document.querySelectorAll('.service-drawer');

if (services.length && serviceDrawers.length) {
  Array.prototype.forEach.call(services, function (service, index) {
    service.addEventListener('mouseenter', function () {
      console.log(index)
      if (servicesImg.length, servicesImg[index]) {
        Array.prototype.forEach.call(servicesImg, (item) => item.classList.remove('js-active'));
        servicesImg[index].classList.add('js-active');
      }
    });

    service.addEventListener('click', function (){
      if (serviceDrawers[index]) {
        lockScroll();
        serviceDrawers[index].classList.add('js-active');
      }
    });

    if (serviceDrawers[index]) {
      const closeBtn = serviceDrawers[index].querySelector('.js-service-close');

      if (closeBtn) {
        closeBtn.addEventListener('click', function (){
          serviceDrawers[index].classList.remove('js-active');
          unlockScroll();
        })
      }
    }
  })
}

const cardsSliderCmp = document.querySelector('.js-cards-slider');

if (cardsSliderCmp) {
  const cardsSlider = new Swiper(cardsSliderCmp, {
    slidesPerView: 1.1,
    spaceBetween: 6,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.js-cards-slider-right',
      prevEl: '.js-cards-slider-left',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 0
      },
      999: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0
      },
      1450: {
        slidesPerView: 4.3,
        centeredSlides: false,
        spaceBetween: 0
      }
    }
  });
}

const employeesSliderCmp = document.querySelector('.js-employees-slider');

if (employeesSliderCmp) {
  const employeesSliderSlider = new Swiper(employeesSliderCmp, {
    slidesPerView: 1.1,
    touchStartPreventDefault: false,
    spaceBetween: 20,
    centeredSlides: true,
    // loop: true,
    navigation: {
      nextEl: '.js-employees-slider-right',
      prevEl: '.js-employees-slider-left',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: false
      },
      999: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: false
      },
      1450: {
        slidesPerView: 4.3,
        spaceBetween: 0,
        centeredSlides: false
      }
    }
  });
}

const videoBtn = document.querySelector('.js-video-btn');
const video = document.querySelector('.js-video-player')

if (videoBtn && video) {
  videoBtn.addEventListener('click', function () {
    video.requestFullscreen();
    video.play();
  });

  video.addEventListener('fullscreenchange', function(event) {
    if (!document.fullscreenElement) {
      video.pause();
      video.currentTime = 0;
    }
  })
}

const employeesCursor = document.querySelector('.js-cursor');

if (employeesCursor && employeesSliderCmp) {
  employeesSliderCmp.addEventListener('mouseover', function (){
    employeesCursor.classList.add('js-active');
  });
  employeesSliderCmp.addEventListener('mouseout', function (){
    employeesCursor.classList.remove('js-active');
  })

  employeesSliderCmp.addEventListener('mousemove', (event) => {
    employeesCursor.style.cssText = `left: ${event.screenX}px; top:${event.pageY - employeesSliderCmp.offsetTop}px;`
  }, true);

  employeesSliderCmp.addEventListener('touchmove', console.log)
}

const accordionBtns = document.querySelectorAll('.js-accordion-click');
const accordionBody = document.querySelectorAll('.accordion__body');
if (accordionBtns.length && accordionBody.length) {
  Array.prototype.forEach.call(accordionBtns, function (btn, index){
    btn.addEventListener('click', function (event){
      Array.prototype.forEach.call(accordionBtns, function (item){
        item.classList.remove('js-active');
      });

      Array.prototype.forEach.call(accordionBody, function (item){
        item.style.maxHeight = '';
      });

      event.currentTarget.classList.add('js-active');

      const body = accordionBody[index];

      if (body) {
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    })
  });
}

function lockScroll() {
  document.body.style.cssText = 'height: 100vh; overflow: hidden;'
}

function unlockScroll() {
  document.body.style.cssText = ''
}

const burgerBtn = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');
const anchors = document.querySelector('.js-anchor');


if (burgerBtn && menu) {
  burgerBtn.addEventListener('click', function () {
    window.scrollTo(0, 0);
    burgerBtn.classList.toggle('js-active');
    menu.classList.toggle('js-active');

    if (burgerBtn.classList.contains('js-active')) {
      lockScroll();
      return;
    }

    unlockScroll();
  })
}

if (anchors) {
  Array.prototype.forEach.call(anchors, function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

const firstScreenVideo = document.querySelector('.js-firs-screen-video');
const videoCloseBtn = document.querySelector('.js-first-screen-close-video');

if (firstScreenVideo && videoCloseBtn) {
  firstScreenVideo.addEventListener('click', function (){
    firstScreenVideo.classList.add('js-active');
  })

  videoCloseBtn.addEventListener('click', function (){
    firstScreenVideo.classList.remove('js-active');
  })
}

const serviceDriversSwiper = new Swiper('.service-drawer__slider', {
  pagination: {
    el: '.js-service-drawer-pagination'
  },
  navigation: {
    nextEl: '.js-service-drawer-next',
    prevEl: '.js-service-drawer-prev',
  },
});
Fancybox.bind('[data-fancybox="gallery"]', {});
