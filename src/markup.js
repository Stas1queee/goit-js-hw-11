export default function createMakrup(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" width="340" height="250"/></a>
  <div class="info">
  <ul class="image-list">
        <li><p class="info-item">
      <b>Likes</b>
       <p class="info">${likes}</p>
    </p></li>
        <li> <p class="info-item">
      <b>Views</b>
      <p class="info">${views}</p>
    </p></li>
        <li><p class="info-item">
      <b>Comments</b>
      <p class="info">${comments}</p>
    </p></li>
        <li><p class="info-item">
      <b>Downloads</b>
      <p class="info">${downloads}</p>
    </p></li>
      </ul>
  </div>
</div>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}
