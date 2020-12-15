console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let breeds 

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  addBreedSelectListener();
})

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => renderImages(dogs));
}
  
  function renderImages(dogs) {
    const container = document.querySelector("#dog-image-container")
    dogs.message.forEach(dog => {
      const img = document.createElement("img")
      img.src = dog
      container.appendChild(img)
    })
  }
  
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(final => {
      breeds = Object.keys(final.message);
      showBreeds(breeds)
    });
  }
  
  function updateBreeds(event) {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
      let selectedBreeds = Object.keys(data.message).filter(breed => breed.startsWith(event.target.value))
      showBreeds(selectedBreeds)
    })
  }

  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', updateBreeds);
  }
  
  function showBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');
    ul.innerHTML = ''
    breeds.forEach(breed => {
      const li = document.createElement("li")
      li.innerText = breed
      li.style.cursor = 'pointer'
      ul.appendChild(li)
      li.addEventListener('click', updateColor)
    });
  }

  function updateColor(event) {
    event.target.style.color = "green";
  }