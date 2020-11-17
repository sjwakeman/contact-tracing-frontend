const endPoint = "http://localhost:3000/api/v1/contacts";
 
document.addEventListener('DOMContentLoaded', () => {
  // Fetch and load contacts
  getContacts()

  // Event Handler and Listener for create contact form
  const createContactForm = document.querySelector("#create-contact-form")
  createContactForm.addEventListener("submit", (e) => {
    createFormHandler(e) })
}) 

function getContacts() {
    fetch(endPoint)
    .then(res => res.json())
    .then(contacts => {
 
        // remember our JSON data is a bit nested due to our serializer
        contacts.data.forEach(contact => {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        const contactMarkup = `
          <div data-id=${contact.id}>
            <h3>${contact.attributes.name}</h3>
            <p>${contact.attributes.date}</p>
            <p>${contact.attributes.category}</p>
            <p>${contact.attributes.location}</p>
            <p>${contact.attributes.occurrence}</p>
            <p>${contact.attributes.individual.name}</p>
            <button data-id=${contact.id}>edit</button>
          </div>
          <br><br>`;
 
          document.querySelector('#contact-container').innerHTML += contactMarkup
        })
    }) 
}

function createFormHandler(e) {
  e.preventDefault() // WORKS
  // debugger
  // console.log(e); // WORKS
  const nameInput = document.querySelector("#input-name").value
  const dateInput = document.querySelector("#input-date").value
  const categoryInput = document.querySelector("#input-category").value
  const locationInput = document.querySelector("#input-location").value
  const occurrenceInput = document.querySelector("#input-occurrence").value
  // const individualInput = document.querySelector("#individuals").value
  // const individualId = parseInt(individualInput)
  // Combines the two lines above into one line of code.
  const individual_id = parseInt(document.querySelector("#individuals").value)
  postFetch(nameInput, dateInput, categoryInput,locationInput, occurrenceInput, individual_id )
}  

function postFetch(name, date, category, location, occurrence,individual_id) {
  console.log(name, date, category, location, occurrence,individual_id)
}



