import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const cardsContainer = document.querySelector(".gallery");
const cardsMarkup = creatGalleryCards(galleryItems);

cardsContainer.insertAdjacentHTML("beforeend", cardsMarkup);

cardsContainer.addEventListener("click", onClick);

function onClick(e) {
	e.preventDefault();

	if (e.target.NodeName !== "IMG") {
		return;
	}
	console.log(e.target.NodeName);

	// 	const instance = basicLightbox.create(`
	//     <img src="${e.target.dataset.source}" width="800" height="600">
	// `);
	// 	instance.show();

	// 	cardsContainer.addEventListener("keydown", e => {
	// 		if (e.code === "Escape") {
	// 			instance.close();
	// 		}
	// 	});

	const instance = basicLightbox.create(
		` <div class="modal"> <img src="${urlOriginalSizePicture}" alt="Big Pictures"/> </div> `,
		{
			onShow: instance => {
				galleryContainer.addEventListener("keydown", onEscapeButton);
			},
			onClose: instance => {
				galleryContainer.removeEventListener("keydown", onEscapeButton);
			},
		},
	);
	instance.show();
	function onEscapeButton(evt) {
		if (evt.key === "Escape") {
			instance.close();
		}
	}
}

function creatGalleryCards(images) {
	return images
		.map(({ preview, original, description }) => {
			return `
        <div class="gallery__item">
            <a class="gallery__link" href="original">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"
                />
                </a>
                </div>`;
		})
		.join("");
}
