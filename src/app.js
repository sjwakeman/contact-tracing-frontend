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
            new Contact(contact, contact.attributes); 
        });
        console.log(this, "this createContacts")
        // app.js:19 App {adapter: Adapter, handleEditClick: ƒ, handleFormSubmit: ƒ, createContacts: ƒ, addContacts: ƒ} "this createContacts
        this.addContacts();
    }

    createIndividuals(individuals) {
        // console.log(individuals, "individuals") // app.js:23 {data: Array(3)} "individuals"
        individuals.data.forEach(individual => {
            // console.log(individual, "individual") 
            //     {id: "1", type: "individual", attributes: {…}, relationships: {…}} "individual"
            //     {id: "2", type: "individual", attributes: {…}, relationships: {…}} "individual"
            //     {id: "3", type: "individual", attributes: {…}, relationships: {…}} "individual"

            new Individual(individual, individual.attributes)
            // console.log(individual, "individual")
            // app.js:31 {id: "1", type: "individual", attributes: {…}, relationships: {…}} "individual"
            // app.js:31 {id: "2", type: "individual", attributes: {…}, relationships: {…}} "individual"
            // app.js:31 {id: "3", type: "individual", attributes: {…}, relationships: {…}} "individual"
            // console.log(individual.attributes, "individual.attributes")
            // app.js:35 {name: "individual one"} "individual.attributes"
            // app.js:35 {name: "individual two"} "individual.attributes"
            // app.js:35 {name: "individual three"} "individual.attributes"
        });

        console.log(this, "this") // console.log(this, "this")  ISSUE app.js:43 undefined "this
        this.addIndividuals();
        console.log(this, "this") // NOT HIT
        
    }

    addContacts() {
        document.querySelector('#contact-container').innerHTML = ``; // ORIGINAL WITH <P>
        Contact.all.forEach(
            contact => (document.querySelector(`#contact-container`).innerHTML += contact.renderContactCard())
            )   
        //! Is there another way to clear innerHTML? ```Node.querySelectorAll('*').forEach(n => n.remove());```
        //! appendChild: https://www.w3schools.com/jsref/met_node_appendchild.asp
        // document.querySelectorAll('ul').forEach(n => n.remove());
        
    }

    addIndividuals() {
        document.querySelector('#contact-container').innerHTML += ``;
        Individual.all.forEach(
            individual => (document.querySelector(`#contact-container`).innerHTML += individual.renderIndividualCard())
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
        const individual_id = e.target.querySelector('#individuals').value; 
        const jsonBody = {name, date, category, location, occurrence, individual_id};
        // this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // REMOVED UPDATE CONTACT
        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => {   // ADDED UPDATE CONTACT
        // debugger
            const contact = Contact.findById(updatedContact.data.id);                // ADDED UPDATE CONTACT
            // let contact = Contact.findById(updatedContact.id);               // ADDED UPDATE CONTACT
            // debugger
            contact.update(updatedContact.data.attributes);                                     // ADDED UPDATE CONTACT
            this.addContacts()                                                  // ADDED UPDATE CONTACT
        });   
        // UPDATE INDIVIDUAL
        this.adapter.updateIndividualCard(id, jsonBody).then(updatedIndividual => {   // ADDED UPDATE CONTACT
        // debugger
            const individual = Individual.findById(updatedIndividual.data.id);                // ADDED UPDATE CONTACT
            individual.update(updatedIndividual.data.attributes);                                     // ADDED UPDATE CONTACT
            this.addIndividuals()                                                  // ADDED UPDATE CONTACT
        });   
    }
 
    handleEditClick(e) {
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); 
        const individual = Individual.findById(id);
        document.querySelector(`#update`).innerHTML = contact.updateContactCard();
        document.querySelector(`#update`).innerHTML = individual.updateIndividualCard();
    }
}



