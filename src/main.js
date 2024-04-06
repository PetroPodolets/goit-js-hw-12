import { searchPhoto } from "./js/pixabay-api.js";
import { showErrorMessage, renderImage, showEndPictures, showNoneText } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formEl = document.querySelector('form');
const images = document.querySelector('.list');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.loadBtn');
const value = document.querySelector("#value");

let page;

let current_query;

const perPage = 15;

const simpleRefresh = new SimpleLightbox('.list li a', {
    captionDelay: 300,
    captions: true,
    captionsData: "alt",
    captionClass: "color-style",
});

function showLoad() {
    loader.style.display = "block";
}

function hideLoad() {
    loader.style.display = "none";
}


function scrollToPage() {
    const cart = document.querySelector('.list li')

    let cartSize = cart.getBoundingClientRect();
    window.scrollBy({
        top: 2.25 * cartSize.height,
        behavior: "smooth",
    });
}

function endPictures() {
    showEndPictures();
    loadMore.style.display = 'none';
}

function checkPages(totalHits) {
    const totalPages = perPage * page;
    if (totalPages >= totalHits) {
        endPictures();
    } else {
        scrollToPage()
    }
}

hideLoad();

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    showLoad();

    images.innerHTML = "";
    loadMore.style.display = 'none';

    const query = value.value.trim();

    if (!query) {
        showNoneText();
        hideLoad();
        return;
    }

    page = 1;

    searchPhoto(query, page, perPage).then(arrayImg => {
        if (arrayImg.hits.length === 0) {
            throw new Error("No images found");
        } else {
            renderImage(images, arrayImg.hits);
            simpleRefresh.refresh();
            if (arrayImg.totalHits > 15) {
                loadMore.style.display = "block";
            }
        }
    }).catch(() => {
        showErrorMessage();
    }).finally(() => {
        hideLoad();
    });

    current_query = query;
    formEl.reset();
});

loadMore.addEventListener('click', (event) => {
    event.preventDefault();
    showLoad();
    page++;
    console.log(current_query);
    searchPhoto(current_query, page, perPage)
        .then(arrayImg => {
            renderImage(images, arrayImg.hits);
            simpleRefresh.refresh();
            const totalHits = arrayImg.totalHits;
            checkPages(totalHits);
        }).catch(() => {
            showErrorMessage();
        })
        .finally(() => {
            hideLoad();
        })
});
