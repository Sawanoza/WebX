const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', function () {
    // Prevent multiple overlays
    if (document.querySelector('.overlay')) return;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Clone card
    const clone = card.cloneNode(true);
    clone.classList.add('expanded');
    clone.addEventListener('click', e => e.stopPropagation());

    // Reveal hidden description
    const hiddenDesc = clone.querySelector('.project-description');
    if (hiddenDesc) {
      hiddenDesc.style.display = 'block';
    }

    overlay.appendChild(clone);
    document.body.appendChild(overlay);

    // Close overlay on click outside
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
