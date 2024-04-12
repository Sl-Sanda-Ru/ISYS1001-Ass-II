
// Array of background image URLs
var backgroundImages = [
    "url('images/1.png')",
    "url('images/2.png')",
    "url('images/3.png')",
    "url('images/4.png')",
    "url('images/5.png')"
];

var currentImageIndex = 0;
var heroSection = document.getElementById('hero');

// Function to change background image
function changeBackgroundImage() {
    // Set new background image
    heroSection.style.backgroundImage = backgroundImages[currentImageIndex];

    // Increment index for the next image
    currentImageIndex++;

    // Reset index if it exceeds the length of the array
    if (currentImageIndex >= backgroundImages.length) {
        currentImageIndex = 0;
    }
}

// Call the function initially
changeBackgroundImage();

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);
