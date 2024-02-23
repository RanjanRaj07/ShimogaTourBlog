var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2500, // milliseconds
    },
    slidesPerView: 3, // Display 3 slides at once
    spaceBetween: 0, // Optional, adds space between slides
});


function loopSlides() {
    var slides = swiper.slides;
    var lastSlide = slides[slides.length - 1].cloneNode(true);
    swiper.wrapper.appendChild(lastSlide);
    setTimeout(function () {
        swiper.removeSlide(slides.length - 1);
        swiper.slideTo(0);
        loopSlides();
    }, 2500); // Delay should match the autoplay delay
}

swiper.on('slideChangeTransitionEnd', function () {
    if (swiper.activeIndex === swiper.slides.length - 1) {
        loopSlides();
    }
});

loopSlides();
