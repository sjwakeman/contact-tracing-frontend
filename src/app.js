class App {
    constructor() {
        this.adapter = new Adapter();  
        this.handleEditClick = this.handleEditClick.bind(this); 
        this.handleFormSubmit = this.handleFormSubmit.bind(this);                            
        this.createContacts = this.createContacts.bind(this);                               
        this.addContacts = this.addContacts.bind(this);   
    }
    attachEventListeners() {
        document.querySelector(`#contact-container`).addEventListener("click", this.handleEditClick);
        document.querySelector(`#update`).addEventListener('submit', this.handleFormSubmit); 
    }

    // The previous functionality is broken up into two different methods for future reuse
    createContacts(contacts) {
        // debugger
        // console.log(contacts, "contacts")
        // console.log(contacts.data, "contacts.data") // undefined

        contacts.data.forEach(contact => { // ORIGINAL
            new Contact(contact, contact.attributes); // OPTION ONE

            // new Contact(contact, contactAttributes); //OPTION TWO
            // app.js:26 Uncaught (in promise) ReferenceError: contactAttributes is not defined
            
            // new Contact(contact); 
            // contact.js:8 Uncaught (in promise) TypeError: Cannot read property 'name' of undefined
            // at new Contact (contact.js:8)
            // at app.js:27

        // contacts.forEach(contact => { // OPTION THREE
            // app.js:27 Uncaught (in promise) TypeError: contacts.forEach is not a function
            // at App.createContacts (app.js:27) 
            // createContacts	@	app.js:27
            // Promise.then (async)		
            // (anonymous)	@	index.js:17
            // new Contact(contact);
            // new Contact(contact.data);
        });
        this.addContacts();
    }
    addContacts() {
        document.querySelector('#contact-container').innerHTML = ``;
        Contact.all.forEach(
            contact => (document.querySelector(`#contact-container`).innerHTML += contact.renderContactCard())
        )
    }
 
    handleFormSubmit(e) {
        e.preventDefault();
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id);           // ORIGINAL UPDATE CONTACT ISSUE TWO CONST CONTACT SET?
        // let contact = Contact.findById(id);          // ADDED UPDATE CONTACT ? TWO CONTACT ??
        const name = contact.name; 
        const date = contact.date;  
        const category = contact.category; 
        const location = contact.location; 
        const occurrence = contact.occurrence;
        const individual_name = contact.individual_id; 
        
        const jsonBody = {name, date, category, location, occurrence, individual_name};
        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // REMOVED UPDATE CONTACT
        // this.adapter.updateContactCard(id, jsonBody).then(updatedContact => {   // ADDED UPDATE CONTACT
        //     const contact = Contact.findById(updatedContact.id);                // ADDED UPDATE CONTACT
        //     // let contact = Contact.findById(updatedContact.id);               // ADDED UPDATE CONTACT
        //     // contact(updatedContact.id)                                       // ADDED UPDATE CONTACT
        //     contact.update(updatedContact);                                     // ADDED UPDATE CONTACT
        //     this.addContacts()                                                  // ADDED UPDATE CONTACT
        // });         
    }
 
    handleEditClick(e) {
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); 
        document.querySelector(`#update`).innerHTML = contact.updateContactCard();
    }
}



