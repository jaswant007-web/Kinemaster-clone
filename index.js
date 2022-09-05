

const nav = document.querySelector('nav');
const section = document.querySelector('section');

const options = { rootMargin: "-12px" }
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changeColor')
        } else {
            nav.classList.add('changeColor')
        }
    })

}, options)

observer.observe(section)


// swiper
// 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIntraction: true,
    },
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});