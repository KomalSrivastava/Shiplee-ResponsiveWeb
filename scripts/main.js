document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const scrollToTopButton = document.getElementById('scrollToTopBtn');

    
    toggleDarkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'block';
        moonIcon.style.display = body.classList.contains('dark-mode') ? 'block' : 'none';
    });

    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = content.style.maxHeight;

            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
            });

            content.style.maxHeight = isActive ? null : `${content.scrollHeight}px`;
        });
    });
});
