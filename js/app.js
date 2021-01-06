//creates and appends search bar
let search = document.querySelector('.search-container')
let searchHtml = `
  <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>
  `
search.insertAdjacentHTML('beforeend', searchHtml)




const randomUserUrl = 'https://randomuser.me/api/?results=12'

async function getRandomEmployees(url) {
  const employeeResponse = await fetch(url);
  const employeeJSON = await employeeResponse.json();

  return employeeJSON
}

getRandomEmployees(randomUserUrl)
  .then(generateEmployees)




function generateEmployees(data) {
  //console.log(data.results.length)
  let gallery = document.getElementById('gallery')
  for (let i = 0; i < data.results.length; i++) {
    //console.log("hello")
    let html = `
      <div class="card" id="${i}">
          <div class="card-img-container">
              <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
              <p class="card-text">${data.results[i].email}</p>
              <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
          </div>
      </div>
      `
      gallery.insertAdjacentHTML('beforeend', html)
};

let employeeCards = document.querySelectorAll('.card')
//console.log(employeeCards.length)
for (let i = 0; i < employeeCards.length; i++) {
  employeeCards[i].addEventListener('click', (event) => {
    let index = event.currentTarget.id
    //console.log(index)
    //console.log(data.results)
    let modalHtml = `
      <div class="modal-container">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                  <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${data.results[i].name.first}</h3>
                  <p class="modal-text">${data.results[i].email}</p>
                  <p class="modal-text cap">${data.results[i].location.city}</p>
                  <hr>
                  <p class="modal-text">${data.results[i].phone}</p>
                  <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state} 97204${data.results[i].location.postcode}</p>
                  <p class="modal-text">Birthday: ${data.results[i].dob.date.slice(5,7)+'/'+data.results[i].dob.date.slice(8,10)+'/'+data.results[i].dob.date.slice(0,4)}</p>
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
      console.log(modalContainer)
      let closeModal = document.querySelector('#modal-close-btn')
      console.log(closeModal)
      closeModal.addEventListener('click', (event) =>{
        console.log('hello')
        modalContainer.remove()
      })

      let modalPrevButton = document.querySelector('#modal-prev')
      let modalNextButton = document.querySelector('#modal-next')
      modalPrevButton.addEventListener('click', (event) =>{
        if (i > 0) {
        modalContainer.remove()
        let modalHtml = `
          <div class="modal-container">
              <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                      <img class="modal-img" src="${data.results[i - 1].picture.large}" alt="profile picture">
                      <h3 id="name" class="modal-name cap">${data.results[i - 1].name.first}</h3>
                      <p class="modal-text">${data.results[i - 1].email}</p>
                      <p class="modal-text cap">${data.results[i - 1].location.city}</p>
                      <hr>
                      <p class="modal-text">${data.results[i - 1].phone}</p>
                      <p class="modal-text">${data.results[i - 1].location.street}, ${data.results[i - 1].location.city}, ${data.results[i - 1].location.state} 97204${data.results[i - 1].location.postcode}</p>
                      <p class="modal-text">Birthday: ${data.results[i - 1].dob.date.slice(5,7)+'/'+data.results[i - 1].dob.date.slice(8,10)+'/'+data.results[i - 1].dob.date.slice(0,4)}</p>
                  </div>
              </div>

              <div class="modal-btn-container">
                  <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                  <button type="button" id="modal-next" class="modal-next btn">Next</button>
              </div>
          </div>
          `
          gallery.insertAdjacentHTML('beforeend', modalHtml)
        console.log('hello prev')
        }
      })

      modalNextButton.addEventListener('click', (event) =>{
        if (i < 10) {
        modalContainer.remove()
        let modalHtml = `
          <div class="modal-container">
              <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                      <img class="modal-img" src="${data.results[i + 1].picture.large}" alt="profile picture">
                      <h3 id="name" class="modal-name cap">${data.results[i + 1].name.first}</h3>
                      <p class="modal-text">${data.results[i + 1].email}</p>
                      <p class="modal-text cap">${data.results[i + 1].location.city}</p>
                      <hr>
                      <p class="modal-text">${data.results[i + 1].phone}</p>
                      <p class="modal-text">${data.results[i + 1].location.street}, ${data.results[i + 1].location.city}, ${data.results[i + 1].location.state} 97204${data.results[i + 1].location.postcode}</p>
                      <p class="modal-text">Birthday: ${data.results[i + 1].dob.date.slice(5,7)+'/'+data.results[i + 1].dob.date.slice(8,10)+'/'+data.results[i + 1].dob.date.slice(0,4)}</p>
                  </div>
              </div>

              <div class="modal-btn-container">
                  <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                  <button type="button" id="modal-next" class="modal-next btn">Next</button>
              </div>
          </div>
          `
          gallery.insertAdjacentHTML('beforeend', modalHtml)
        console.log('hello prev')
        }
      })



  })
}
}







  // <div class="modal-container">
  //     <div class="modal">
  //         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
  //         <div class="modal-info-container">
  //             <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
  //             <h3 id="name" class="modal-name cap">${data.results[i].name.first}</h3>
  //             <p class="modal-text">${data.results[i].email}</p>
  //             <p class="modal-text cap">${data.results[i].location.city}</p>
  //             <hr>
  //             <p class="modal-text">${data.results[i].phone}</p>
  //             <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state} 97204${data.results[i].location.postcode}</p>
  //             <p class="modal-text">Birthday: ${data.results[i].dob}</p>
  //         </div>
  //     </div>
  //
  //     <div class="modal-btn-container">
  //         <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
  //         <button type="button" id="modal-next" class="modal-next btn">Next</button>
  //     </div>
  // </div>



// let cards = document.getElementById('gallery')
// cards.addEventListener('click', (event) => {
//   console.log(event.target.className)
//   if (event.target.className.includes('card')) {
//     console.log('hello if')
//
//   }
// })
  //element.insertAdjacentHTML('beforeend', 'HTML string')

  //
  // <div class="modal-container">
  //     <div class="modal">
  //         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
  //         <div class="modal-info-container">
  //             <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
  //             <h3 id="name" class="modal-name cap">${data.results[i].name.first}</h3>
  //             <p class="modal-text">${data.results[i].email}</p>
  //             <p class="modal-text cap">${data.results[i].location.city}</p>
  //             <hr>
  //             <p class="modal-text">${data.results[i].phone}</p>
  //             <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state} 97204${data.results[i].location.postcode}</p>
  //             <p class="modal-text">Birthday: ${data.results[i].dob}</p>
  //         </div>
  //     </div>
  //
  //     <div class="modal-btn-container">
  //         <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
  //         <button type="button" id="modal-next" class="modal-next btn">Next</button>
  //     </div>
  // </div>
