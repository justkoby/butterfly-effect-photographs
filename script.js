document.addEventListener('DOMContentLoaded', function () {
    const mainNavbar = document.getElementById('mainNavbar');
    const navbarCollapse = document.getElementById('navbarNav');
    const heroCarouselElement = document.getElementById('heroCarousel');
    const indicators = document.querySelectorAll('.slide-indicator');

    // If navbar isn't on this page, bail early
    if (!mainNavbar || !navbarCollapse) return;

    function throttle(func, limit) {
        let inThrottle;
        return function () {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    function handleScroll() {
        // Only apply scrolled style when menu is NOT open
        if (!navbarCollapse.classList.contains('show')) {
            if (window.scrollY > 50) {
                mainNavbar.classList.add('scrolled');
            } else {
                mainNavbar.classList.remove('scrolled');
            }
        }
    }

    // Initial check in case page loads scrolled
    handleScroll();

    // Scroll listener
    window.addEventListener('scroll', throttle(handleScroll, 100));

    // Mobile menu open/close
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        mainNavbar.classList.add('menu-open');
        mainNavbar.classList.remove('scrolled');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        mainNavbar.classList.remove('menu-open');
        handleScroll();
    });

    // Only attach carousel handler if heroCarousel exists on this page
    if (heroCarouselElement && indicators.length) {
        heroCarouselElement.addEventListener('slide.bs.carousel', function (e) {
            const activeIndicator = document.querySelector('.slide-indicator.active');
            if (activeIndicator) {
                activeIndicator.classList.remove('active');
            }
            indicators[e.to].classList.add('active');
        });
    }
});
