document.addEventListener('DOMContentLoaded', () => {
    const dl = document.querySelector('.grid-container'); //Grabs from the .grid-container
    const radioButtons = document.querySelectorAll('input[name="abc"]'); //Grabs all of the data with a name off abc

    const originalSections = Array.from(dl.querySelectorAll('.grid-item')); // Save the original order

    const sortAlphabetically = (sections) => { // Sort alphabetically by link text
        return [...sections].sort((a, b) => {
            const aText = a.querySelector('dd a').textContent.trim().toLowerCase();
            const bText = b.querySelector('dd a').textContent.trim().toLowerCase();
            return aText.localeCompare(bText);
        });
    };
    radioButtons.forEach(radio => { // Update display on radio change
        radio.addEventListener('change', () => {
            if (!radio.checked) return;
            dl.innerHTML = '';
            const sortedSections = radio.value === 'abc' ? sortAlphabetically(originalSections) : originalSections;
            sortedSections.forEach(section => dl.appendChild(section));
        });
    });
});
