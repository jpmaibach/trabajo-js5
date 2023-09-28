const catImage = document.getElementById("cat-image");
const loadButton = document.getElementById("load-button");
const saveButton = document.getElementById("save-button");
const imageCounter = document.getElementById("image-counter");
const savedImages = document.getElementById("saved-images");

let loadedImages = 0;

loadButton.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            if (data && data[0] && data[0].url) {
                catImage.src = data[0].url;
                catImage.style.display = "block";
                loadedImages++;
                imageCounter.textContent = loadedImages;
            }
        })
        .catch((error) => {
            console.error("Error al cargar la imagen del gato:", error);
        });
});

saveButton.addEventListener("click", () => {
    const currentImage = catImage.src;
    if (currentImage) {
        const savedImage = document.createElement("img");
        savedImage.
        savedImage
src = currentImage;
        savedImages.appendChild(savedImage);
    }
});