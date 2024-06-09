document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    function handleWheelEvent(event) {
        if (event.deltaY > 0) {
            // Прокрутка вниз
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
            }
        } else {
            // Прокрутка вверх
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(currentSectionIndex);
            }
        }
    }

    window.addEventListener('wheel', handleWheelEvent);
});
