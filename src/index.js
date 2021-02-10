// const endPoint = "http://localhost:3000/api/v1/contacts";                    // ADAPTER REFACTOR REMOVED
 
document.addEventListener('DOMContentLoaded', () => {
  // Fetch and load contacts
  // getContacts() // ADAPTER REFACTOR REMOVED

  // Event Handler and Listener for create contact form
  // let createContactForm = document.querySelector("#create-contact-form")     // ADAPTER REFACTOR REMOVED
  // createContactForm.addEventListener("submit", (e) => {                         // ADAPTER REFACTOR REMOVED
  //   createFormHandler(e) })                                                     // ADAPTER REFACTOR REMOVED

  // Event Listener for EDIT button
  let app = new App();  
  app.attachEventListeners();

  // Load individuals for Contact Form
  let individuals = () => {
    // console.log("Inside individuals")
    Individual.all.forEach(individual => { 
      let newOption = new Option(`${individual.name}`, `${individual.id}`)
        individualOptions.appendChild(newOption, undefined)
     })
  }
  
  // // Load contact for Contact Form
  // let contact = () => {
  //   console.log("Inside contact") // NOT HIT AFTER CLICKING DROP DOWN MENU FOR CHOOSE AN INDIVIDUAL
  //   contact.all.forEach(contact=> {
  //     let newOption =  new Option(`${contact.name}`, `${contact.id}`)
  //       contactOptions.appendChild(newOption, undefined)
  //   })
  // }



  // ADAPTER REFACTOR ADD
  app.adapter.fetchContacts().then(app.createContacts) // NEED TO ADD CREATE CONTACTS TO APP.JS

  // ORDER OF OPERATIONS ISSUE HAD TO USE .THEN AND AN EMPTY FUNCTION TO CALL INDIVIDUALS TO WORK CORRECTLY
  // MAY NEED TO DO WITH CFEATEINDIVIDUALS AS WELL
  app.adapter.fetchIndividuals().then(app.createIndividuals).then( () => individuals())// Fetch all individuals

  let individualOptions = document.getElementById("individuals"); // save individuals drop down element
  // console.log(individualOptions, "individualOptions")
  // index.js:29 <select name=​"individuals" id=​"individuals">​…​</select>​ "individualOptions"
}) 
