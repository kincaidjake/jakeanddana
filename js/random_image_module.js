function getRandomImage() {
    const images = [
        { src: 'img/image-01.png', srcset: 'img/image-01@2x.png 2x' },
        { src: 'img/image-02.png', srcset: 'img/image-02@2x.png 2x' },
        { src: 'img/image-03.png', srcset: 'img/image-03@2x.png 2x' }
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function getRandomRotation() {
    return Math.floor(Math.random() * 13) - 6;  // Random angle between -6 and +6 degrees
}

function displayRandomImage() {
    const imageContainer = document.getElementById('random-image-container');
    const imgElement = document.createElement('img');
    const randomImage = getRandomImage();
    const randomAngle = getRandomRotation();

    imgElement.src = randomImage.src;
    imgElement.srcset = randomImage.srcset;
    imgElement.alt = 'Random Image';

    // Apply the random rotation using CSS
    imgElement.style.transform = `rotate(${randomAngle}deg)`;
    imgElement.style.transition = 'transform 0.5s ease';

    // Clear the container before adding a new image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}

// Load a random image on page load
window.onload = () => {
    displayRandomImage();

    // Add click event listener to refresh the image on click
    document.getElementById('random-image-container').addEventListener('click', displayRandomImage);

    // Set interval to refresh the image every 8 seconds
    setInterval(displayRandomImage, 8000);
};
