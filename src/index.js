const endPoint = "http://localhost:3000/api/v1/contacts";
 
document.addEventListener('DOMContentLoaded', () => {
  // Fetch and load contacts
  getContacts()

  // Event Handler and Listener for create contact form
  let createContactForm = document.querySelector("#create-contact-form")
  // const createContactForm = document.querySelector("#create-contact-form")
  // const createContactForm = document.getElementById("#create-contact-form")
  createContactForm.addEventListener("submit", (e) => {
    createFormHandler(e) })

  // Event Listener for EDIT button
  let app = new App(); 
  app.attachEventListeners();

  // Adapter to render Contact Card
  // app.adapter.fetchNotes().then(json => { // REFERENCE
  // debugger
  app.adapter.fetchContacts().then(json => { // END GOAL
    // debugger
    // json.forEach(note => { // REFERENCE
    // json.forEach(contact => { // ORIGINALLY ERROR index.js:23 Uncaught (in promise) TypeError: json.forEach is not a function
    json.data.forEach(contact => { // RESOLUTION FROM ORIGINAL LINE ABOVE // END GOAL
      // debugger
      // document.querySelector('#notes-list').innerHTML += new Note(note).renderListItem(); // REFERENCE
      document.querySelector(`#contact-container`).innerHTML += new Contact(contact, contact.attributes).renderContactCard(); // END GOAL
    }) // END GOAL
  }) // END GOAL
  
}) 


function getContacts() {
    fetch(endPoint)
    .then(res => res.json())
    .then(contacts => {
      // debugger
 
        // remember our JSON data is a bit nested due to our serializer
        contacts.data.forEach(contact => {
          // debugger
        // create new instance of contact class to hit debugger in contact.js
        let newContact = new Contact(contact, contact.attributes)

        // Update contact-container with return data
        document.querySelector('#contact-container').innerHTML += newContact.renderContactCard()
        newContact.renderContactCard()
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

// EDIT FORM HANDLER?
// function editFormHandler(e) {
//   e.preventDefault() // WORKS
//   // debugger
//   // console.log(e); // WORKS
//   const nameInput = document.querySelector("#input-name").value
//   const dateInput = document.querySelector("#input-date").value
//   const categoryInput = document.querySelector("#input-category").value
//   const locationInput = document.querySelector("#input-location").value
//   const occurrenceInput = document.querySelector("#input-occurrence").value
//   // const individualInput = document.querySelector("#individuals").value
//   // const individualId = parseInt(individualInput)
//   // Combines the two lines above into one line of code.
//   const individual_id = parseInt(document.querySelector("#individuals").value)
//   postFetch(nameInput, dateInput, categoryInput,locationInput, occurrenceInput, individual_id )
// }  

function postFetch(name, date, category, location, occurrence,individual_id) {
// console.log(name, date, category, location, occurrence, individual_id) // WORKS
  // Build bodyData Object outside of the fetch
  let bodyData = {name, date, category, location, occurrence, individual_id}
  // console.log(bodyData) // WORKS individual name displays
  fetch(endPoint, {
    // Post Request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(contact => {
    console.log(contact); // WORKS
    // Render the data
    // debugger // HITS WORKS
    const contactData = contact.data
    
    // Render json response
    // create new instance of contact class to hit debugger in contac.js
    let newContact = new Contact(contactData, contactData.attributes)

    // Update contact-container with return data
    document.querySelector('#contact-container').innerHTML += newContact.renderContactCard()
    newContact.renderContactCard()
  })


}



