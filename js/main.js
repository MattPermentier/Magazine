window.addEventListener('load', init);

/**
 * Global variables
 */
let apiUrl = './webservice/index.php';
let bikeCards;
let detailCard;
let showDetails;
let showSpecs;

function init() {
    bikeCards = document.getElementById('bikeCards');
    bikeCards.addEventListener('click', clickHandler);

    detailCard = document.getElementById('bikeDetails');
    showDetails = document.getElementById('bikeDetails');

    ajaxRequestHandler(apiUrl, createBikeCards);
    showAllDetails();
}

function ajaxRequestHandler(url, successHandler) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

function clickHandler(e) {
    let specificItem = e.target;
    let id = specificItem.dataset.id;

    // check which button is clicked
    if (specificItem.nodeName === 'BUTTON' && specificItem.innerHTML !== 'Show Specs') {
        console.log(`Add to Favorites Button: ${id}`);
        addToFavorites(id);
    } else if (specificItem.nodeName === 'BUTTON' && specificItem.innerHTML !== 'Add to Favorites') {
        console.log(`Show Specs Button: ${id}`);
        detailHandler(id);
    }
}

function addToFavorites(id) {
    // get card and button info
    let clickedCard = document.querySelector(`.title[data-id='${id}']`);
    let clickedBtn = document.querySelector(`.favoritesBtn[data-id='${id}']`);

    // check if card is set to favorite or not
    if (clickedCard.classList.contains('favorite') === true) {
        clickedCard.classList.remove('favorite');
    } else {
        clickedCard.classList.add('favorite');
    }

    // empty button text and check if card is already added to favorites
    clickedBtn.innerHTML = '';
    if (clickedCard.classList.contains('favorite')) {
        clickedBtn.innerHTML = 'Remove from Favorites';
        clickedBtn.style.backgroundColor = 'darkgreen';
        localStorage.setItem(`bikeId${id}`, `${id}`);
        console.log(localStorage);
    } else {
        clickedBtn.innerHTML = 'Add to Favorites';
        clickedBtn.style.backgroundColor = 'black';
        localStorage.removeItem(`bikeId${id}`);
    }
}

function detailHandler(id) {
    // ask for specs information
    ajaxRequestHandler(`${apiUrl}/?id=${id}`, detailSuccessHandler);
}

function showAllDetails() {
    // give detail card the name of Details
    let title = document.createElement('h1');
    title.innerHTML = 'Details';
    title.classList.add('detail');
    showDetails.appendChild(title);

    // set the title in a div
    showSpecs = document.createElement('div');
    showSpecs.classList.add('detail');
    showDetails.appendChild(showSpecs);
}

function detailSuccessHandler(detail) {
    // first empty the Details card before showing the data of the chosen bike
    showSpecs.innerHTML = '';
    let bike = document.createElement('h3');
    bike.classList.add('detail');
    bike.innerHTML = `${detail.class} <br> ${detail.price} <br>  ${detail.engine} <br> ${detail.compressionRatio} <br> ${detail.topSpeed} <br> ${detail.power}`;
    showSpecs.appendChild(bike);
}

function createBikeCards(bikes) {

    for (let bike of bikes) {
        // check if there are cards added to favorites
        let storage = localStorage.getItem(`bikeId${bike.id}`);

        //create a div to put in all the information
        let bikeCard = document.createElement('div');
        bikeCard.classList.add('bike-card');
        bikeCard.dataset.name = bike.name;
        bikeCards.appendChild(bikeCard);

        //create the image of the div
        let image = document.createElement('img');
        image.classList.add('bike-image');
        image.dataset.id = bike.id;
        image.src = `images/${bike.image}`;
        bikeCard.appendChild(image);

        //create the title of the div
        let bikeTitle = document.createElement('h2');
        bikeTitle.classList.add('title');
        bikeTitle.innerHTML = `${bike.merk} ${bike.model}`;
        bikeTitle.dataset.id = bike.id;
        bikeCard.appendChild(bikeTitle);

        //create a show specs button
        let showSpecsBtn = document.createElement('button');
        showSpecsBtn.innerHTML = 'Show Specs';
        showSpecsBtn.classList.add('favoritesSpecs');
        showSpecsBtn.dataset.name = bike.merk;
        showSpecsBtn.dataset.id = bike.id;
        bikeCard.appendChild(showSpecsBtn);

        //create an add to favorites button
        let favoritesBtn = document.createElement('button');
        favoritesBtn.innerHTML = 'Add to Favorites';
        favoritesBtn.classList.add('favoritesSpecs', 'favoritesBtn');
        favoritesBtn.dataset.name = bike.merk;
        favoritesBtn.dataset.id = bike.id;

        // check if card is set to favorite after refresh, and decide which button text is used
        if (storage !== null) {
            favoritesBtn.innerHTML = 'Remove from Favorites';
            favoritesBtn.style.backgroundColor = 'darkgreen';
        } else {
            favoritesBtn.innerHTML = 'Add to Favorites';
            favoritesBtn.style.backgroundColor = 'black';
        }

        bikeCard.appendChild(favoritesBtn);
    }
}

function ajaxErrorHandler() {
    // if something went wrong, then show error
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    bikeCards.before(error);
}
















