document.querySelectorAll('.card-back').forEach(cardBack => {
    const imageUrl = cardBack.getAttribute('data-image');
    cardBack.style.backgroundImage = `url(${imageUrl})`;
});
