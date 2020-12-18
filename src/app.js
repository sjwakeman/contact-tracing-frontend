class App {
    constructor() {
        this.adapter = new Adapter();
        // this.handleEditClick = this.handleEditClick.bind(this) // FUTURE CODE
    }
    attachEventListeners() {
        document.querySelector(`#contact-container`).addEventListener("click", (e) => {
        // console.log("CLICKED"); //WORKED
        e.preventDefault();
        const id = e.target.dataset.id;
    // debugger
        const contact = Contact.findById(id);
        // debugger
        // EDIT FUNCTIONALITY HERE
        document.querySelector('#update').innerHTML = contact.updateContactCard(); 
    });

    document.querySelector(`#update`).addEventListener('submit', e => {
        e.preventDefault();
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id);
        // const name = this.name;
        const name = contact.name;
        // const date = this.date;
        const date = contact.date;
        // const category = this.category;
        const category = contact.category;
        // const location = this.location;
        const location = contact.location;
        // const occurrence = this.occurrence;
        const occurrence = contact.occurrence;
        // const individual_name = this.individual_name; // ORIGINAL
        // const individual_id = this.individual_id;
        const individual_name = contact.individual_id; 
                
        const jsonBody = {name, date, category, location, occurrence, individual_name}; // ORIGINAL
        // const jsonBody = {name, date, category, location, occurrence, individual_id};
        // debugger

        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); 
        // this.adapter.updatedContact(id, jsonBody).then(updatedContact => console.log(updatedContact));
    })

    }
}

