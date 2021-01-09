
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let breedLi
let dogPic

document.addEventListener("DOMContentLoaded", () => { 
    fetchImages() 
    fetchBreeds()
    breedDropdown()
    let lis = document.querySelectorAll('li')
})

function fetchImages() {
    return fetch(imgUrl)
    .then(response => response.json())
    .then(dogs => renderImages(dogs))
}

function renderImages(dogs) { 
    let container = document.getElementById('dog-image-container')
    dogs.message.forEach(dog => { 
        dogPic = document.createElement('img')
        dogPic.src = dog
        container.appendChild(dogPic)
    })
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {let b = Object.keys(breeds.message)
        renderBreeds(b) 
        breedDropdown(b)
    })
    
}
// you take in the breeds object and use the .forIn loop to iterate -- and you can check to see if the given breed has other breeds (another array, which you can then iterate over)   

function renderBreeds(b) {
    const ul = document.querySelector('#dog-breeds')
    b.forEach(breed => {
        breedLi = document.createElement('li')
        breedLi.innerText = breed
        ul.appendChild(breedLi)
    })   
    colorLi() 
}

function colorLi() {
    let lis = document.querySelectorAll('li')
    lis.forEach(li => {
        // debugger
        li.addEventListener('click', () => {
            li.style.color = "magenta"
        })
    })
}

function breedDropdown(b) { 
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', (e) => { 
        const ul = document.querySelector('#dog-breeds')
        console.log(e.target.value)
        // console.log("dropdown", dropdown.value)
        // let lis = document.querySelectorAll('li')
        ul.innerHTML = ""
        // let breeds = b.filter(breed => breed.startsWith(e.target.value))
        // ul.appendChild(breeds) 
    })
    if (dropdown.value === "a") { 
        lis.forEach(li => { 
            if (li.innerText.startsWith("a")) { 
                ul.appendChild(li) 
                console.log(li)
            } else { 
                li.remove
            }
        })
    } else if (dropdown.value === "b") {
        lis.forEach(li => { 
            if (li.innerText.startsWith("b")) { 
                ul.appendChild(li)
                console.log(li)
            } else { 
                li.remove 
            }
        })
    } else if (dropdown.value === "c") {
        lis.forEach(li => { 
            if (li.innerText.startsWith("c")) { 
                ul.appendChild(li)
                console.log(li)
            } else { 
                li.remove 
            }
        })
    }  else if (dropdown.value === "d") {
        lis.forEach(li => { 
            if (li.innerText.startsWith("d")) { 
                li 
                console.log(li)
            } else { 
                li.remove 
            }
        })
    }
    } )
    
}
    // const names = ['Victoria', 'Pearl', 'Olivia', 'Annabel', 'Sandra', 'Sarah'];
    // const filterItems = (letters) => {
    //     return b.filter(b => b.indexOf(letters) = 0);
    // } 

    // console.log(filterItems('ia')); // ["Victoria", "Olivia"]




    // function selectBreedsStartingWith(letter) {
    //     updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
    //   }
    //   function addBreedSelectListener() {
    //     let breedDropdown = document.querySelector('#breed-dropdown');
    //     breedDropdown.addEventListener('change', function (event) {
    //       selectBreedsStartingWith(event.target.value);
    //     });
    //   }