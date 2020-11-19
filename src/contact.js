// Create a file src/contact.js and link it to it from index.html
class Contact {
    constructor(contact, contactAttributes) {
    // constructor(id, contactAttributes) {
        this.id = contact.id;   // Top level
        this.name = contactAttributes.name;
        this.date = contactAttributes.date;
        this.category = contactAttributes.category;
        this.location = contactAttributes.location;
        this.occurrence = contactAttributes.occurrence;
        this.individual = contactAttributes.individual
        Contact.all.push(this);
        debugger
    }

    // renderContactCard() {
    //     return `
    //     <div data-id=${this.id}>
    //     <h3>${this.name}</h3>
    //     <p>${this.date}</p>
    //     <p>${this.category}</p>
    //     <p>${this.location}</p>
    //     <p>${this.occurrence}</p>
    //     <p>${this.individual.name}</p>
    //     <button data-id=${this.id}>EDIT</button>
    //   </div>
    //   <br></br>`;
        
    // }
}

Contact.all = []