class App {
    constructor() {
        this.adapter = new Adapter();
        this.handleEditClick = this.handleEditClick.bind(this); // FUTURE CODE               // ADDED ADAPTER REFACTOR
        this.handleFormSubmit = this.handleFormSubmit.bind(this);                            // ADDED ADAPTER REFACTOR
        this.createContacts = this.createContacts.bind(this);                               // ADDED ADAPTER REFACTOR
        this.addContacts = this.addContacts.bind(this);                                     // ADDED ADAPTER REFACTOR
    }

    attachEventListeners() {
        // document.querySelector(`#contact-container`).addEventListener("click", (e) => { // ORIGINAL // REMOVED ADAPTER REFACTOR
        document.querySelector(`#contact-container`).addEventListener("click", this.handleEditClick);
        // console.log("CLICKED"); //WORKED
        // e.preventDefault();                                                                 // REMOVED ADAPTER REFACTOR
        // const id = e.target.dataset.id;                                                  // REMOVED ADAPTER REFACTOR
    // debugger
        // const contact = Contact.findById(id);                                               // REMOVED ADAPTER REFACTOR
        // debugger
        // EDIT FUNCTIONALITY HERE
        // document.querySelector('#update').innerHTML = contact.updateContactCard();          // REMOVED ADAPTER REFACTOR
    // });                                                                                        // REMOVED ADAPTER REFACTOR

    // document.querySelector(`#update`).addEventListener('submit', e => { // ORIGINAL     // REMOVED ADAPTER REFACTOR
    document.querySelector(`#update`).addEventListener('submit', this.handleFormSubmit);   // ADDED ADAPTER REFACTOR    
    // e.preventDefault();                                                          // REMOVED ADAPTER REFACTOR
        // const id = e.target.dataset.id;                                                 // REMOVED ADAPTER REFACTOR
        // const contact = Contact.findById(id);                                           // REMOVED ADAPTER REFACTOR
        // const name = this.name;
        // const name = contact.name;                                                      // REMOVED ADAPTER REFACTOR
        // const date = this.date;
        // const date = contact.date;                                                      // REMOVED ADAPTER REFACTOR
        // const category = this.category;
        // const category = contact.category;                                              // REMOVED ADAPTER REFACTOR
        // const location = this.location;
        // const location = contact.location;                                              // REMOVED ADAPTER REFACTOR
        // const occurrence = this.occurrence;
        // const occurrence = contact.occurrence;                                          // REMOVED ADAPTER REFACTOR
        // const individual_name = this.individual_name; // ORIGINAL
        // const individual_id = this.individual_id;
        // const individual_name = contact.individual_id;                                  // REMOVED ADAPTER REFACTOR
                
        // const jsonBody = {name, date, category, location, occurrence, individual_name}; // ORIGINAL // REMOVED ADAPTER REFACTOR
        // const jsonBody = {name, date, category, location, occurrence, individual_id};
        // debugger

        // this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // REMOVED ADAPTER REFACTOR
    }

    // ADDED ADAPTER REFACTOR BELOW
    // The previous functionality is broken up into two different methods for future reuse
    createContacts(contacts) {
        // console.log(contacts, "contacts") // WORKS
        // {data: Array(1)}
        // data: Array(1)
        // 0: attributes: {name: "contact one", date: "March 1, 2020", category: "work", location: "office", occurrence: "10", …}
        // id: "1"
        // type: "contact"
        // __proto__: Object
        // length: 1
        // __proto__: Array(0)
        // __proto__: Object
        //  "contacts"
        // debugger
        contacts.data.forEach(contact => { 
            // console.log(contact)
//             {id: "1", type: "contact", attributes: {…}}
//              attributes: {name: "contact one", date: "March 1, 2020", category: "work", location: "office", occurrence: "10", …}
//              id: "1"
//              type: "contact"
//               __proto__: Object
            // new Contact(contact);
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

