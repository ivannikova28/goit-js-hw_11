export function markupGallery(array) {
  return array.map((item) => markupItemGallery(item)).join(""); 
}        

function markupItemGallery(gallery_item) {
  const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = gallery_item
  return (
      `<div class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img class="gallery__image" loading="lazy" src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="gallery__info">
          <p class="gallery__info-item">
            <b>Likes ${likes}</b>
          </p>
          <p class="gallery__info-item">
            <b>Views ${views}</b>
          </p>
          <p class="gallery__info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="gallery__info-item">
            <b>Downloads ${downloads}</b>
          </p>
        </div>
      </div>`
  )
}