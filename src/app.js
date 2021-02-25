class App {
    constructor() {
        this.adapter = new Adapter();  
        this.handleEditClick = this.handleEditClick.bind(this); 
        this.handleFormSubmit = this.handleFormSubmit.bind(this);                            
        this.createContacts = this.createContacts.bind(this);                               
        this.addContacts = this.addContacts.bind(this);   
        this.createIndividuals = this.createIndividuals.bind(this);
        this.addIndividuals = this.addIndividuals.bind(this);
    }
    
    attachEventListeners() {
        document.querySelector(`#create-contact-form`).addEventListener("submit", this.handleFormSubmit);
        document.querySelector(`#contact-container`).addEventListener("click", this.handleEditClick);
        document.querySelector(`#update`).addEventListener('submit', this.handleFormSubmit); 
        // document.querySelector(`#individuals`).addEventListener("click", this.handleEditClick); 
        // TIED TO INDIVIDUAL DROP DOWN DONT NEED!
    }

    // The previous functionality is broken up into two different methods for future reuse
    createContacts(contacts) {
        contacts.data.forEach(contact => { // ORIGINAL
            new Contact(contact, contact.attributes); 
        });
        // console.log(this, "this createContacts")
        // app.js:19 App {adapter: Adapter, handleEditClick: ƒ, handleFormSubmit: ƒ, createContacts: ƒ, addContacts: ƒ} "this createContacts
        this.addContacts();
    }

    createIndividuals(individuals) {
        // console.log("Inside Fetch")
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

        // console.log(this, "this") // WORKS AFTER BIND THIS WITH FUNCTION 
        // app.js:46 App {adapter: Adapter, handleEditClick: ƒ, handleFormSubmit: ƒ, createContacts: ƒ, addContacts: ƒ, …} "this"
        this.addIndividuals();
        // console.log(this, "this") // WORKS AFTER BIND THIS WITH FUNCTION
        // app.js:49 App {adapter: Adapter, handleEditClick: ƒ, handleFormSubmit: ƒ, createContacts: ƒ, addContacts: ƒ, …} "this"
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
        document.querySelector('#individuals').innerHTML += ``;
        // document.querySelector('#individual-container').innerHTML += ``;

        // console.log(Individual.all, "Individual.all app.js file")
        // app.js:67 (3) [Individual, Individual, Individual] "Individual.all app.js file"
        Individual.all.forEach(
            individual => (document.querySelector(`#individuals`).innerHTML += individual.renderIndividualCard())
            // individual => (document.querySelector(`#individual-container`).innerHTML += individual.renderIndividualCard())
            // Displays all three individuals with EDIT button in individual-container area of index.html
        )
    }

    //TERNARY OPERATOR FOR INPUT-ATTRIBUTE OR UPDATE-ATTRIBUTE
   


 
    handleFormSubmit(e) {
        // console.log(e, "e")
        // SubmitEvent {isTrusted: true, submitter: input#create-button.submit, type: "submit", target: form#create-contact-form, currentTarget: form#create-contact-form, …}bubbles: truecancelBubble: falsecancelable: truecomposed: falsecurrentTarget: nulldefaultPrevented: trueeventPhase: 0isTrusted: truepath: (6) [form#create-contact-form, div.form-container, body, html, document, Window]returnValue: falsesrcElement: form#create-contact-formsubmitter: input#create-button.submittarget: form#create-contact-formtimeStamp: 24298.849999991944type: "submit"__proto__: SubmitEvent "e"
        // e.preventDefault();
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); //COMMENTED OUT DOUBLE ID   // ORIGINAL UPDATE CONTACT ISSUE TWO CONST CONTACT SET?
        // let contact = Contact.findById(id);          // ADDED UPDATE CONTACT ? TWO CONTACT ??

        // debugger // od AMD contact IS UNDEFINED?

        //TERNARY OPERATOR FOR INPUT-ATTRIBUTE OR UPDATE-ATTRIBUTE
        // let name = e.target.querySelector('#input-name');
        //     (e === name ? name('#input-name').value : name('#update-name').value);
       
        // let date = e.target.querySelector('#input-date');
        //     (e === date ? date('#input-date').value : date('#update-date').value);
                    
        // let category = e.target.querySelector('#input-category');
        //     (e === category ? category('#input-category').value : category('#update-ccategory').value);
        
        // let location = e.target.querySelector('input-location');
        //     (e === location ? location('#input-location').value : location('#update-location').value);

        // let occurrence = e.target.querySelector('input-occurrence');
        //     (e === occurrence ? occurrenceSelector('#input-occurrence').value : occurrence('#update-occurrence').value);
           
        // let individual_id = e.target.querySelector('#individuals').value; 

        //ANOTHER TERNARY EXAMPLE
        // $("#create-contact-form input-name input-date input-category input-location input-occurrence individuals").value
        // let create = ("#create-contact-form input").value // SAME AS ABOVE CREATE CONTACT
        // let edit = ("#update input").value // EDIT CONTACT
        //     (e === create ? create.value : edit.value);

        // TERNARY EXAMPLE
        // ("#create-contact-form input") ? ("#create-contact-form input").value :  ("#update input").value //jsonBody not defined
        // debugger
        // TERNARY ALTERNATIVE 
        // let form = e.target.querySelector(`#create-contact-form input`) ? ("#create-contact-form input").value :  ("#update input").value 
        // const jsonBody = {form};
        // debugger
        // TARGET FORM VALUES
        // const name = e.target.querySelector('#update-name').value; // ORIGINAL
        // const date = e.target.querySelector('#update-date').value; // ORIGINAL
        // const category = e.target.querySelector('#update-category').value; // ORIGINAL
        // const location = e.target.querySelector('#update-location').value; // ORIGINAL
        // const occurrence = e.target.querySelector('#update-occurrence').value; // ORIGINAL
        // const individual_id = e.target.querySelector('#individuals').value; // ORIGINAL

        // let attributes = {
        const name = e.target.children[1].value; // AFTER INCLUDING INDIVIDUAL TEXT LINE
        const date = e.target.children[4].value; // AFTER INCLUDING INDIVIDUAL TEXT LINE 
        const category = e.target.children[7].value; // AFTER INCLUDING INDIVIDUAL TEXT LINE
        const location = e.target.children[10].value; // AFTER INCLUDING INDIVIDUAL TEXT LINE
        const occurrence = e.target.children[13].value; // AFTER INCLUDING INDIVIDUAL TEXT LINE
        const individual_id = e.target.querySelector('#individuals').value; 
        const jsonBody = {name, date, category, location, occurrence, individual_id};
        // }

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
        for (let attributes of Object.keys(jsonBody)) {
            let contactAttributes = jsonBody[attributes];
            // console.log(attributes, contactAttributes)
                // name contact two    app.js:148
                // date March 1, 2020   app.js:148
                // category work        app.js:148
                // location hospital    app.js:148
                // occurrence 20        app.js:148
                // individual_id        app js:148
            // console.log(contactAttributes)
                // contact two      app.js:154
                // March 1, 2020    app.js:154
                // work             app.js:154
                // hospital         app.js:154
                // 20               app.js:154
                //                  app.js:154
        }
        

 

        // jsonBody.forEach(element => console.log(element, "element"))
          debugger // jsonBody DISPLAYS NEW CONTACT ATTRIBUTES
        // this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // REMOVED UPDATE CONTACT
        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => {   // ADDED UPDATE CONTACT
        // debugger // NOT HITTING
            const contact = Contact.findById(updatedContact.data.id);                // ADDED UPDATE CONTACT
            // let contact = Contact.findById(updatedContact.id);               // ADDED UPDATE CONTACT
            // debugger
            contact.update(updatedContact.data.attributes);                                     // ADDED UPDATE CONTACT
            this.addContacts()                                                  // ADDED UPDATE CONTACT
        });   
        // UPDATE INDIVIDUAL
        this.adapter.updateIndividualCard(id, jsonBody).then(updatedIndividual => {   // ADDED UPDATE INDIVIDUAL
        // debugger
            const individual = Individual.findById(updatedIndividual.data.id);                // ADDED UPDATE INDIVIDUAL
            individual.update(updatedIndividual.data.attributes);                                     // ADDED UPDATE INDIVIDUAL
            this.addIndividuals()                                                  // ADDED UPDATE INDIVIDUAL
        });   
    }
 
    handleEditClick(e) {
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id); 
        // const individual = Individual.findById(id);
        document.querySelector(`#update`).innerHTML = contact.updateContactCard();
        // document.querySelector(`#update`).innerHTML = individual.updateIndividualCard();
            // IF ACTIVATE 114 ONLY SEE INDIVIDUAL NOT CONTACT ATTRIBUTES DOES NOT COMBINE BOTH!
    }
}