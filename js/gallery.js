// js/gallery.js

function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Set background image
    imageDiv.textContent = previewPic.alt; // Set text to alt text
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = ''; // Reset background image
    imageDiv.textContent = 'Hover over an image below to display here.'; // Reset text
}

// Attach event listeners (better practice than inline events)
const previewImages = document.querySelectorAll('.preview');

previewImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        upDate(image); // Call upDate with the image element
    });

    image.addEventListener('mouseout', () => {
        unDo(); // Call unDo
    });
});