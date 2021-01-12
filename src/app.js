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
        contacts.data.forEach(contact => { // ORIGINAL
            new Contact(contact, contact.attributes); // OPTION ONE
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
        // const contact = Contact.findById(id); //COMMENTED OUT DOUBLE ID   // ORIGINAL UPDATE CONTACT ISSUE TWO CONST CONTACT SET?
        // let contact = Contact.findById(id);          // ADDED UPDATE CONTACT ? TWO CONTACT ??
        
        // ORIGINAL
        // const name = contact.name; 
        // const date = contact.date;  
        // const category = contact.category; 
        // const location = contact.location; 
        // const occurrence = contact.occurrence;
        // const individual_name = contact.individual_id; 
        // debugger
        // TARGET FORM VALUES
        const name = e.target.querySelector('#update-name').value;
        const date = e.target.querySelector('#update-date').value;
        const category = e.target.querySelector('#update-category').value;
        const location = e.target.querySelector('#update-location').value;
        const occurrence = e.target.querySelector('#update-occurrence').value;
        const individual_name = e.target.querySelector('#update-individual').value;


        const jsonBody = {name, date, category, location, occurrence};
        // const jsonBody = {name, date, category, location, occurrence, individual_name};
        // this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // REMOVED UPDATE CONTACT
        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => {   // ADDED UPDATE CONTACT

            const contact = Contact.findById(updatedContact.data.id);                // ADDED UPDATE CONTACT
            // let contact = Contact.findById(updatedContact.id);               // ADDED UPDATE CONTACT
            // debugger
            contact.update(updatedContact.data.attributes);                                     // ADDED UPDATE CONTACT
            this.addContacts()                                                  // ADDED UPDATE CONTACT
        });         
    }
 
    handleEditClick(e) {
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); 
        document.querySelector(`#update`).innerHTML = contact.updateContactCard();
    }
}



