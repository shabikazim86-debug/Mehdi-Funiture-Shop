const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        const galleryImages = document.querySelectorAll('.bed-images img');

        // Open image in full view when clicked
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src; 
                modal.showModal();      
            });
        });

        // Close the full view when clicking anywhere on the background or image
        modal.addEventListener('click', () => {
            modal.close();
        });