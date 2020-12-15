console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    fetchPictures()
    fetchBreeds()
    updateDropdown();
});

function fetchPictures() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(dogs => renderImage(dogs))
}

function renderImage(image) {
    const dogPics = document.getElementById("dog-image-container")
    image.message.forEach(image => {
        const img = document.createElement("img")
        img.src = image
        dogPics.appendChild(img)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            breeds = Object.keys(data.message);
            showBreeds(breeds)
        });
}

function updateBreeds(event){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        let selectedBreed = Object.keys(data.message).filter(breed => breed.startsWith(event.target.value))
        showBreeds(selectedBreed)
    })
}

function showBreeds(breeds){
    const breedList = document.getElementById('dog-breeds')
    breedList.innerHTML = ''
    breeds.forEach(breed => {
        const li = document.createElement("li")
        li.innerText = breed
        breedList.appendChild(li)
        li.addEventListener('click', updateColor)
    });
}

function updateDropdown(){
    let drop = document.getElementById("breed-dropdown");
    drop.addEventListener('change', updateBreeds);
}

function updateColor(event) {
    event.target.style.color = "orange";
}

