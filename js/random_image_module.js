function getRandomImage() {
    const images = [
        {
            src: 'img/image-01.png',
            srcset: 'img/image-01@2x.png 2x',
        },
        {
            src: 'img/image-02.png',
            srcset: 'img/image-02@2x.png 2x',
        },
        {
            src: 'img/image-03.png',
            srcset: 'img/image-03@2x.png 2x',
        }
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayRandomImage() {
    const imageContainer = document.getElementById('random-image-container');
    const imgElement = document.createElement('img');
    const randomImage = getRandomImage();

    imgElement.src = randomImage.src;
    imgElement.srcset = randomImage.srcset;
    imgElement.alt = 'Random Image';

    // Clear the container before adding a new image (optional)
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}

window.onload = displayRandomImage;
