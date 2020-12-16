console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []
// attach event listners
let dogImageContainer = document.getElementById('dog-image-container')
const dogBreedUl = document.getElementById('dog-breeds')
const breedDropDown = document.getElementById('breed-dropdown')

document.addEventListener("DOMContentLoaded", () => {
    fetchImages()
    loadBreedOptions()

})

function fetchImages(){
     fetch(imgUrl)
    .then(resp => resp.json())
    .then( renderImages => {
        renderImages.message.forEach(image => addImage(image))        
    })
}

function addImage(picture) {
    const dogImageContainer = document.getElementById('dog-image-container')

    let newImage = document.createElement('img')
    newImage.src = picture
    dogImageContainer.appendChild(newImage)
}

function loadBreedOptions() {
        fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
  
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }

  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }


  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }

  function updateColor(event) {
    event.target.style.color = 'blue';
  }