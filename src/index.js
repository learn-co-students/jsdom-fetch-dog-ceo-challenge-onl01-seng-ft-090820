console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    document.querySelector('select').addEventListener('change', filterBreeds)
  })

function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function renderImages(dogs) {
  const div = document.querySelector("#dog-image-container")
  dogs.message.forEach (dog => {
    const img = document.createElement('img')  
    img.src = dog 
    div.appendChild(img)
  })
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(data => renderBreeds(Object.keys(data.message)))
}


function filterBreeds(event) {
  //const selectedBreed = event.target.value 
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(data => {
      const selectedBreed = event.target.value 
      let breeds = Object.keys(data.message).filter(b => b.startsWith(selectedBreed))
      renderBreeds(breeds)
  }) 
}


function renderBreeds(breeds) {
  const ul = document.querySelector("#dog-breeds")
  ul.innerHTML = ""
  breeds.forEach (breed => {
    const li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)   
    li.addEventListener('click', () => {li.style.color = 'magenta'
    })
  })
  
}



