document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".blog-container");
    const thumb = document.querySelector(".scrollbar-thumb-img");
    const track = document.querySelector(".scrollbar-track-img");
    const list = document.querySelector(".blog-container ul");

    list.addEventListener("scroll", function () {
        const containerHeight = list.clientHeight;
        const contentHeight = list.scrollHeight;
        const scrollTop = list.scrollTop;

        // Calculate the maximum scrollable distance
        const maxScroll = contentHeight - containerHeight;

        // Calculate the proportion of scrolled distance to max scroll
        const scrollRatio = maxScroll > 0 ? scrollTop / maxScroll : 0;

        // Calculate the position of the thumb within the track
        const thumbPosition = scrollRatio * (track.clientHeight - thumb.clientHeight);

        // Set the thumb position with offset for positioning
        thumb.style.top = `${thumbPosition}px`;
        thumb.style.right = '0'; // Adjust the right position
    });

    // Trigger initial scroll position update
    list.dispatchEvent(new Event('scroll'));
});


