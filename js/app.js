


fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  //.then(randos => console.log(randos.results))
  .then(data => generateEmployee(data))

function generateEmployee(data) {
  //console.log(data.results.length)
  let gallery = document.getElementById('gallery')
  for (let i = 0; i < data.results.length; i++) {
    //console.log("hello")
    let html = `
      <div class="card">
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
}

let cards = document.getElementById('gallery')
console.log(cards)
cards.addEventListener('click', (event) => {
  console.log(event.target.className)
  if (event.target.className === 'card') {
    console.log('hello')
  }
})
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
