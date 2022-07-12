import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onImageClick);
let instance;

function onImageClick(event) {
    event.preventDefault() 
    const clickOnImg = event.target;
    const urlOfBigImg = clickOnImg.dataset.source;

    if (!clickOnImg.classList.contains("gallery__image")) {
        return
    }
    instance = basicLightbox.create(`
    <img src="${urlOfBigImg}">`)
    instance.show();

    window.addEventListener("keydown", onEscKeyPress); 
}

function onEscKeyPress(keydown) {
    if (keydown.code === "Escape") {
        window.removeEventListener("keydown", onEscKeyPress);
        instance.close();
    }
}

function createGallery(galleryArray) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class = "gallery__item">
                    <a class = "gallery__link" href = "${original}">
                        <img
                            class = "gallery__image"
                            src = "${preview}"
                            data-source = "${original}"
                            alt = "${description}"
                        />
                    </a>
                </div>`
    }).join("");
}






