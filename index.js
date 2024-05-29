document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.line').forEach(line => {
        const firstHalf = line.innerHTML;
        line.innerHTML += firstHalf;
    });
});
