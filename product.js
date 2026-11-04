const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-modal');
const galleryImages = document.querySelectorAll('.products-images img');

// Open image on DOUBLE CLICK
galleryImages.forEach(img => {
    img.addEventListener('dblclick', () => {
        modalImg.src = img.src;
        modal.showModal();
    });
});

// Close when X button clicked
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.close();
});

// Close when clicking outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});