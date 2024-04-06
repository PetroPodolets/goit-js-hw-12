import iziToast from "izitoast";
import Error from "../img/error.svg";

export function showErrorMessage() {
  iziToast.show({
    message: "Sorry, there are no images matching your search query. Please, try again!",
    maxWidth: "340px",
    iconUrl: Error,
    backgroundColor: "#ef4040",
    theme: "dark",
    color: "#fafafb",
    timeout: 3000,
    position: "topRight"
  });
}



export function showEndPictures() {
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    maxWidth: "340px",
    iconUrl: Error,
    backgroundColor: "#ef4040",
    theme: "dark",
    color: "#fafafb",
    timeout: 3000,
    position: "topRight"
  });
}


export function showNoneText() {
  iziToast.show({
    message: "Sorry, you have an empty string",
    maxWidth: "340px",
    iconUrl: Error,
    backgroundColor: "#ef4040",
    theme: "dark",
    color: "#fafafb",
    timeout: 3000,
    position: "topRight"
  });
}


export function renderImage(img, arrayImg) {
  const markup = arrayImg.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="li-img">
      <a href="${largeImageURL}">
        <img class="img-descr" src="${webformatURL}" alt="${tags}">
      </a>
      <ul class="info-photo">
        <li class="descr">
          <h2 class="descr-h2">Likes</h2>
          <p class="descr-p">${likes}</p>
        </li>
        <li>
          <h2 class="descr-h2">Views</h2>
          <p class="descr-p">${views}</p>
        </li>
        <li>
          <h2 class="descr-h2">Comments</h2>
          <p class="descr-p">${comments}</p>
        </li>
        <li>
          <h2 class="descr-h2">Downloads</h2>
          <p class="descr-p">${downloads}</p>
        </li>
      </ul>
    </li>`;
  }).join("");

  img.insertAdjacentHTML("beforeend", markup);
}