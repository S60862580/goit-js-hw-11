// Modal and Elemets

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <li class="gallery-item">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" ></img></a>
        <div class="infor">
     <p>${likes}Likes</p>
            <p> ${views}Views</p>
            <p> ${comments}Comments</p>
        <p> ${downloads}Downloads</p>
    </div>
     </li>
   `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoader() {
  loader.classList.add('is-hidden');
}
