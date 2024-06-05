document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".blog-container");
    const thumb = document.querySelector(".scrollbar-thumb-img");
    const track = document.querySelector(".scrollbar-track-img");
    const list = document.querySelector(".blog-container ul");

    list.addEventListener("scroll", function () {
        const containerHeight = list.clientHeight;
        const contentHeight = list.scrollHeight;
        const scrollTop = list.scrollTop;

        const maxScroll = contentHeight - containerHeight;

        const scrollRatio = maxScroll > 0 ? scrollTop / maxScroll : 0;

        const thumbPosition = scrollRatio * (track.clientHeight - thumb.clientHeight);

        thumb.style.top = `${thumbPosition}px`;
        thumb.style.right = '0';
    });

    list.dispatchEvent(new Event('scroll'));
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const points = document.querySelector('.points');
    const headerButtons = document.querySelector('.header-buttons');
    const title = document.querySelector('.title');

    function toggleMenu() {
        burger.classList.toggle('active');

        if (nav.style.display === 'flex' || nav.classList.contains('open')) {
            nav.style.display = 'none';
            points.style.display = 'none';
            headerButtons.style.display = 'none';
            title.style.marginTop = '70px';

        } else {
            nav.style.display = 'flex';
            points.style.display = 'block';
            headerButtons.style.display = 'block';
            title.style.marginTop = '560px';
        }
    }

    burger.addEventListener('click', toggleMenu);
});







