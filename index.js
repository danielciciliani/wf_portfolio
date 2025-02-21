console.log('testing conection from repository');

document.addEventListener("DOMContentLoaded", function () {

    showChangingHeader();
    showSliderHeader();

});


function showChangingHeader(){
    let texts = document.querySelectorAll(".is_hero_changing-text");
    let index = 0;

    texts.forEach((text, i) => {
        let word = text.textContent.trim();
        text.innerHTML = ""; 

        word.split("").forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter;
            span.style.opacity = 0;
            span.style.display = "inline-block";
            span.style.transform = "translateY(20px)";
            text.appendChild(span);
        });

        gsap.set(text, { opacity: i === 0 ? 1 : 0 });
    });

    function changeText() {
        let currentText = texts[index];
        let nextIndex = (index + 1) % texts.length;
        let nextText = texts[nextIndex];

        gsap.to(currentText.children, { opacity: 0, x: 20, stagger: 0.005, duration: 0.5 });

        setTimeout(() => {
            gsap.set(currentText, { opacity: 0 });
            gsap.set(nextText, { opacity: 1 });
            gsap.fromTo(
                nextText.children,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, stagger: 0.05, duration: 0.7 }
            );
        }, 500);

        index = nextIndex;
    }

    setInterval(changeText, 2000);
}


function showSliderHeader() {
    let swiperHero = new Swiper(".is-slider-hero", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 300,
        loopedSlides: 10,
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        createElements: true,
    });
}