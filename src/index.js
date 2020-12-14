console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => renderImages(dogs));
  }
  
  function renderImages(dogs) {
    const container = document.querySelector("#dog-image-container")
    const img = document.createElement("img")
    dogs.message.forEach(dog => {
      img.src = dog
      container.appendChild(img)
    })
  }
  
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(final => {breeds = Object.keys(final.message);
      updateBreeds(breeds)
      addBreedSelectListener();
    });
  }
  
  function updateBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeBreeds(ul);
    breeds.forEach(breed => showBreed(breed));
  }

  function removeBreeds(x) {
    let child = x.lastElementChild;
    while (child) {
      x.removeChild(child)
      child = x.lastElementChild;
    }
  }

  function selectBreedsStartingWith(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
  }

  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function showBreed(breed) {
    const ul = document.querySelector("#dog-breeds")
    const li = document.createElement("li")
      li.innerText = breed
      li.style.cursor = 'pointer'
      ul.appendChild(li)
      li.addEventListener('click', updateColor)
  }

  function updateColor(event) {
    event.target.style.color = "green";
  }