// const endPoint = "http://localhost:3000/api/v1/contacts";                    // ADAPTER REFACTOR REMOVED
 
document.addEventListener('DOMContentLoaded', () => {
  // Fetch and load contacts
  // getContacts() // ADAPTER REFACTOR REMOVED

  // Event Handler and Listener for create contact form
  // let createContactForm = document.querySelector("#create-contact-form")     // ADAPTER REFACTOR REMOVED
  // const createContactForm = document.querySelector("#create-contact-form")
  // const createContactForm = document.getElementById("#create-contact-form")
  // createContactForm.addEventListener("submit", (e) => {                         // ADAPTER REFACTOR REMOVED
  //   createFormHandler(e) })                                                     // ADAPTER REFACTOR REMOVED

  // Event Listener for EDIT button
  let app = new App(); 
  app.attachEventListeners();

  // ADAPTER REFACTOR ADD
  app.adapter.fetchContacts().then(app.createContacts) // NEED TO ADD CREATE CONTACTS TO APP.JS

  // Adapter to render Contact Card
  // debugger
  // app.adapter.fetchContacts().then(json => { // END GOAL                          // ADAPTER REFACTOR REMOVED
    // debugger
  //   json.data.forEach(contact => { // RESOLUTION FROM ORIGINAL LINE ABOVE // END GOAL // ADAPTER REFACTOR REMOVED
  //     // debugger
  //     document.querySelector(`#contact-container`).innerHTML += new Contact(contact, contact.attributes).renderContactCard(); // END GOAL                                                             // ADAPTER REFACTOR REMOVED
  //   })                                                                            // ADAPTER REFACTOR REMOVED

  // })                                                                              // ADAPTER REFACTOR REMOVED
  
}) 

// // ADAPTER REFACTOR REMOVED BELOW
// function getContacts() {
//     fetch(endPoint)
//     .then(res => res.json())
//     .then(contacts => {
//       // debugger
 
//         // remember our JSON data is a bit nested due to our serializer
//         contacts.data.forEach(contact => {
//           // debugger
//         // create new instance of contact class to hit debugger in contact.js
//         let newContact = new Contact(contact, contact.attributes)

//         // Update contact-container with return data
//         document.querySelector('#contact-container').innerHTML += newContact.renderContactCard()
//         newContact.renderContactCard()
//          })
//     }) 
// }

// function createFormHandler(e) {
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

// function postFetch(name, date, category, location, occurrence,individual_id) {
// // console.log(name, date, category, location, occurrence, individual_id) // WORKS
//   // Build bodyData Object outside of the fetch
//   let bodyData = {name, date, category, location, occurrence, individual_id}
//   // console.log(bodyData) // WORKS individual name displays
//   fetch(endPoint, {
//     // Post Request
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(bodyData)
//   })
//   .then(response => response.json())
//   .then(contact => {
//     // console.log(contact); // WORKS
//     // Render the data
//     // debugger // HITS WORKS
//     const contactData = contact.data
    
//     // Render json response
//     // create new instance of contact class to hit debugger in contac.js
//     let newContact = new Contact(contactData, contactData.attributes)

//     // Update contact-container with return data
//     document.querySelector('#contact-container').innerHTML += newContact.renderContactCard()
//     newContact.renderContactCard()
//   })
// //   const individual_id = parseInt(document.querySelector("#individuals").value)
//   postFetch(name, date, category,location, occurrence, individual_id )
// }  




