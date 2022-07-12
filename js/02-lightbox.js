import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onImageClick);
// let instance;

function onImageClick(event) {
    event.preventDefault() 
    const clickOnImg = event.target;
    const urlOfBigImg = clickOnImg.dataset.source;

    if (!clickOnImg.classList.contains("gallery__image")) {
        return
    }
    const lightbox = new SimpleLightbox('.gallery__item', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    }); 
}

function createGallery(galleryArray) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
}

