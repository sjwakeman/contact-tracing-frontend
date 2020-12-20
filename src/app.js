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
        contacts.data.forEach(contact => {
            new Contact(contact, contact.attributes);
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
        const contact = Contact.findById(id); 
        const name = contact.name; 
        const date = contact.date;  
        const category = contact.category; 
        const location = contact.location; 
        const occurrence = contact.occurrence;
        const individual_name = contact.individual_id; 
        
        const jsonBody = {name, date, category, location, occurrence, individual_name};
        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact));
    }
 
    handleEditClick(e) {
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); 
        document.querySelector(`#update`).innerHTML = contact.updateContactCard();
    }
}



