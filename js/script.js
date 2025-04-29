document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        // Only animate for internal links
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function (e) {
                // Prevent default navigation
                e.preventDefault();
                window.location.href = link.href;
            });
        }
    });
});