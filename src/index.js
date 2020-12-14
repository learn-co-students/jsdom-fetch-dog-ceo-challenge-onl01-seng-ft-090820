console.log('%c HI', 'color: firebrick')

let breedList = document.querySelector('ul#dog-breeds')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {dogImages(json.message)})

  function dogImages(dogs){
    // console.log(dogs)
    dogs.forEach(dog => {
    //   console.log(dog)
      const dogImgContainer = document.querySelector('#dog-image-container')
      const doggo = document.createElement('img')
      doggo.src = dog
      dogImgContainer.appendChild(doggo)
    });
  } 

  fetch (breedUrl)
  .then(resp => resp.json())
  .then(json => dogBreeds(Object.entries(json.message)))

  function dogBreeds(breeds) {
    //   console.log(breeds)
      breeds.forEach(breed => {
        // console.log(breed)
        const type = document.createElement('li')
        breedList = document.querySelector('ul#dog-breeds')
        type.innerText = breed[0]
        breedList.appendChild(type)
        type.addEventListener('click', () => {
            type.style.color = "green"
        })
      })
  }

//   function filterBreeds(breeds) {
//       breedList.addEventListener('change', () => {
//         const filter = document.querySelector('select#breed-dropdown')
//         let letter = filter.children[i]
//         breedList = breedList.filter((e) => {

//         })
//       })
    //   const optA = filter.children[0]
    //   const optB = filter.children[1]
    //   const optC = filter.children[2]
    //   const optD = filter.children[3]

//   }

