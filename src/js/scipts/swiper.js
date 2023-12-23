const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    breakpoints: {
        // when window width is >= 320px
        992: {
          spaceBetween: 20
        },
    }
});