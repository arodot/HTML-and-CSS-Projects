// Ensure JS runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Select Lightbox Elements
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const thumbnails = document.querySelectorAll(".gallery-thumbnail");

    let currentIndex = 0;

    // Function to open the Lightbox Modal
    function openModal(index) {
        currentIndex = index;
        const selectedImg = thumbnails[currentIndex];
        
        // Load the larger high-resolution version stored in 'data-large'
        const largeImageSrc = selectedImg.getAttribute("data-large");
        const imageAlt = selectedImg.getAttribute("alt");

        modal.style.display = "block";
        modalImg.src = largeImageSrc;
        captionText.innerHTML = imageAlt;
    }

    // Attach Click Event Listeners to all Gallery Thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Close Modal Function
    function closeModal() {
        modal.style.display = "none";
    }

    // Close Modal on Close Button Click
    closeBtn.addEventListener("click", closeModal);

    // Close Modal on Background Click
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Navigate to Next Image
    function showNext() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        openModal(currentIndex);
    }

    // Navigate to Previous Image
    function showPrev() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        openModal(currentIndex);
    }

    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Keyboard Shortcuts (Left/Right Arrows, Escape)
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "block") {
            if (event.key === "Escape") {
                closeModal();
            } else if (event.key === "ArrowRight") {
                showNext();
            } else if (event.key === "ArrowLeft") {
                showPrev();
            }
        }
    });
});