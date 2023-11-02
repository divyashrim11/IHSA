function toggleDescription(link) {
    const cardDescription = link.parentElement;
    const fullDescription = cardDescription.querySelector('.full-description');

    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'inline'; // Display the full content inline
        link.textContent = 'less...'; // Change the link text to "less..."
    } else {
        fullDescription.style.display = 'none';
        link.textContent = 'more...';
    }
}