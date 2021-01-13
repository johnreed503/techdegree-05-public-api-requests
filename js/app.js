
//api address to be called, and number of randomusers requested
const randomUserUrl = 'https://randomuser.me/api/?results=12'

//async downloads and parses data for employees
async function getRandomEmployees(url) {
  const employeeResponse = await fetch(url);
  const employeeJSON = await employeeResponse.json();
  return employeeJSON
}
getRandomEmployees(randomUserUrl)
  .then(data => data = data.results)
  .then(generateEmployees)
  .catch( e => {
    gallery.innerHTML = '<h1>Sorry, something went wrong try refreshing, please contact reedjustin77@gmail if the problem persists</h1>';
    console.error(e);
  })

//displays 12 employee cards on the screen
function generateEmployees(data) {
  let gallery = document.getElementById('gallery')
  gallery.innerHTML =  ''
  for (let i = 0; i < data.length; i++) {
    let html = `
      <div class="card" id="${i}">
          <div class="card-img-container">
              <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
              <p class="card-text">${data[i].email}</p>
              <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
          </div>
      </div>
      `
      gallery.insertAdjacentHTML('beforeend', html)
};
let employeeCards = document.querySelectorAll('.card')
for (let i = 0; i < employeeCards.length; i++) {
  employeeCards[i].addEventListener('click', (event) => {
    let index = event.currentTarget.id
    createModal(data, i)
      let modalContainer = document.querySelector('.modal-container')
      let modalPrevButton = document.querySelector('#modal-prev')
      let modalNextButton = document.querySelector('#modal-next')

  })
}
}

//creates a modal and displays it to the screen
function createModal (data, i) {
  let unformatedPhone = data[i].phone
  let phone = unformatedPhone.replace(/\D/g, '')
  let formatedPhone = ''
  if (phone.length === 10){
    formatedPhone = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`
  } else if (phone.length === 11) {
    formatedPhone = `+${phone[0]} (${phone.slice(1,4)}) ${phone.slice(4,7)}-${phone.slice(7,12)}`
  } else {
    formatedPhone = `${phone.slice(-8,-5)}-${phone.slice(-4)}`
  }
  let modalHtml = `
  <div class="modal-container" id='${i}'>
      <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
              <h3 id="name" class="modal-name cap">${data[i].name.first}</h3>
              <p class="modal-text">${data[i].email}</p>
              <p class="modal-text cap">${data[i].location.city}</p>
              <hr>
              <p class="modal-text">${formatedPhone}</p>
              <p class="modal-text">${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.state} ${data[i].location.postcode}</p>
              <p class="modal-text">Birthday: ${data[i].dob.date.slice(5,7)+'/'+data[i].dob.date.slice(8,10)+'/'+data[i].dob.date.slice(0,4)}</p>
          </div>
      </div>
      <div class="modal-btn-container">
          <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
          <button type="button" id="modal-next" class="modal-next btn">Next</button>
      </div>
  </div>
  `
  gallery.insertAdjacentHTML('beforeend', modalHtml)
  let modalContainer = document.querySelector('.modal-container')
  let closeModal = document.querySelector('#modal-close-btn')
  closeModal.addEventListener('click', (event) =>{
    modalContainer.remove()
  })
  let modalPrevButton = document.querySelector('#modal-prev')
  let modalNextButton = document.querySelector('#modal-next')








  modalPrevButton.addEventListener('click', (event) =>{
    const cards = document.querySelectorAll('.card')
    let counter = 0
    let searchArray = []
    cards.forEach(card => {
      if (card.style.display === 'none'){
        counter++
      } else {
        searchArray.push(card)
      }
    })
    //if theres hidden modals
    if (counter > 0) {
      let cardPosition = 0
      let searchArrayPosition = 0
      for (let i = 0; i < searchArray.length; i++){
        if (modalContainer.id === searchArray[i].id){
          cardPosition = searchArray[i].id
          searchArrayPosition = i
        }
      }
      //let previousIndexPosition = searchArray[searchArrayPosition-1].id
      if (searchArrayPosition > 0) {
        let previousIndexPosition = searchArray[searchArrayPosition-1].id
        modalContainer.remove()
        createModal(data, previousIndexPosition)
      }
      //if theres no hidden modals
  } else {
    if (i > 0) {
    modalContainer.remove()
    createModal(data, i - 1)
    }
  }
  //this is the end of the modalPrevButton
  })



  modalNextButton.addEventListener('click', (event) =>{
    // if (i < 11) {
    // modalContainer.remove()
    // createModal(data, i + 1)
    // }
    const cards = document.querySelectorAll('.card')
    let counter = 0
    let searchArray = []
    cards.forEach(card => {
      if (card.style.display === 'none'){
        counter++
      } else {
        searchArray.push(card)
      }
    })
    //if theres hidden modals
    if (counter > 0) {
      let cardPosition = 0
      let searchArrayPosition = 0
      for (let i = 0; i < searchArray.length; i++){
        if (modalContainer.id === searchArray[i].id){
          cardPosition = searchArray[i].id
          searchArrayPosition = i
        }
      }
      //let previousIndexPosition = searchArray[searchArrayPosition-1].id
      if (searchArrayPosition < searchArray.length - 1) {
        let previousIndexPosition = searchArray[searchArrayPosition+1].id
        modalContainer.remove()
        createModal(data, previousIndexPosition)
      }
      //if theres no hidden modals
  } else {
    if (i < 11) {
    modalContainer.remove()
    createModal(data, i + 1)
    }
  }
  })




}








//creates and appends search bar
let search = document.querySelector('.search-container')
let searchHtml = `
  <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>
  `
search.insertAdjacentHTML('beforeend', searchHtml)
let searchInput = document.getElementById('search-input')
let searchSubmit = document.querySelector('.search-submit')

//displays employee cards that actively match whats in the search input
function activeSearch() {
  searchInput.addEventListener('keyup', (event) => {

    let noResultsMessage = document.querySelector('.message')
    if (noResultsMessage !== null) {
      noResultsMessage.remove()
    }

    cards = document.querySelectorAll('.card')
    names = document.querySelectorAll('#name')
    if (cards.length === 12) {
      lowerCaseSearch = event.target.value.toLowerCase()
      for (let i = 0; i < cards.length; i++){
        let name = names[i].innerHTML.toLowerCase()
        if (name.includes(lowerCaseSearch) !== true) {
          cards[i].style.display = 'none'
        } else {
          cards[i].style.display = 'flex'
        }
      }
    }
    noResultsFound()
  })
}

//displays emplyee cards that match whats in the search input when the searh button is clicked
function buttonSearch() {
  searchSubmit.addEventListener('click', (event) => {
    let noResultsMessage = document.querySelector('.message')
    if (noResultsMessage !== null) {
      noResultsMessage.remove()
    }
    cards = document.querySelectorAll('.card')
    names = document.querySelectorAll('#name')
      lowerCaseSearch = searchInput.value.toLowerCase()
      for (let i = 0; i < cards.length; i++){
        let name = names[i].innerHTML.toLowerCase()
        if (name.includes(lowerCaseSearch) !== true) {
          cards[i].style.display = 'none'
        } else {
          cards[i].style.display = 'flex'
        }
      }
      noResultsFound()
  })
}




function noResultsFound() {

  cards = document.querySelectorAll('.card')
  // message = document.querySelector('.no-results')
  let counter = 0
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].style.display === 'flex') {
      counter += 1
    }
  }
  if (counter === 0) {
    let gallery = document.getElementById('gallery')
    let noResultsMessage = `<h2 class='message'>No results found</h2>`
    gallery.insertAdjacentHTML('beforeend', noResultsMessage)

  }
}


buttonSearch()
activeSearch()
