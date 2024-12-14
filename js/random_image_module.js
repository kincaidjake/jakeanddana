function getRandomImage() {
    const images = [
        'img/random-image-module/image-01.png',
        'img/random-image-module/image-02.png',
        'img/random-image-module/image-03.png'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayRandomImage() {
    const imageContainer = document.getElementById('random-image-container');
    const imgElement = document.createElement('img');
    imgElement.src = getRandomImage();
    imgElement.alt = 'Random Image';
    imageContainer.appendChild(imgElement);
}

window.onload = displayRandomImage;