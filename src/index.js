import galleryItems from './data/gallery-items';

const buttonNext = document.getElementById('btnNext');
const buttonPrev = document.getElementById('btnPrev');
const catalogList = document.getElementById('catalogList');

const catalogItem = galleryItems => {
  console.log(galleryItems);
  return galleryItems
    .map(({ img, button }) => {
      return `
      <li class="catalog__item">
      <img
        class="catalog__img"
        src="${img}"
        alt="product"
        />
        <button class="button type="button">${button}</button>
        </li>
        `;
    })
    .join('');
};
const galleryMarkup = catalogItem(galleryItems); //ссылка на createGallereyCard
catalogList.insertAdjacentHTML('beforeend', galleryMarkup); //добавление елементов
