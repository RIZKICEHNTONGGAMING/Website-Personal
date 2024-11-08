document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('src');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${src}" alt="Gallery Image">
                    <button class="close-btn">Tutup</button>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
        });
    });
});
