const flipButtons = document.querySelectorAll('.flip-button');

flipButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('show');
        button.textContent = details.classList.contains('show') ? 'Show Less' : 'Learn More';
    });
});