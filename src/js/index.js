new Swiper('.busCases__box', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    type: 'fraction',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
// import { galleryItems } from './gallery';

// const addGalleryItems = document.querySelector('.busCases__box-list');
// const galleryMarkup = createGallereyCard(galleryItems);
// addGalleryItems.insertAdjacentHTML('beforeend', galleryMarkup);

// function createGallereyCard(galleryItems) {
//   return galleryItems
//     .map(
//       ({
//         original,
//         preview,
//         light_webp,
//         light_jpg,
//         strong_jpg,
//         strong_webp,
//         description,
//       }) => {
//         return `
//           <li class="swiper">
//             <div class="swiper-wrapper" href="${original}">
//                 <img class="swiper-slide" src="${preview}" alt="${description}" />
//             </div>
//           </li>
//             `;
//       }
//     )
//     .join('');
// }

// let lightbox = new SimpleLightbox('.busCases__box-list a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

// // <li class="busCases__box-item">
// //   <a class="busCases__box-img">
// //     <picture class="team__img">
// //       <source
// //         srcset="
// //           ${light_webp},
// //           ${strong_webp}
// //         "
// //         type="image/webp"
// //       />
// //       <source
// //         srcset="
// //           ${light_jpg},
// //           ${strong_jpg}
// //         "
// //         type="image/jpeg"
// //       />
// //       <img src="${preview}" alt="${description}" />
// //     </picture>
// //   </a>
// // </li>
