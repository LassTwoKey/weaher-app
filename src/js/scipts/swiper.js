export function setNewSwiper(selector) {
    if (!setNewSwiper) return

    new Swiper(selector, {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 15,
        breakpoints: {
            // when window width is >= 320px
            992: {
                spaceBetween: 20,
            },
        },
    })
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
    breakpoints: {
        // when window width is >= 320px
        992: {
            spaceBetween: 20,
        },
    },
})
