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
        // Push all instances of this into an empty array
        Contact.all.push(this);
        // debugger
    }
    
    renderContactCard() {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object   
        // debugger  
        return `
          <div data-id=${this.id}>
            <h3>${this.name}</h3>
            <p>${this.date}</p>
            <p>${this.category}</p>
            <p>${this.location}</p>
            <p>${this.occurrence}</p>
            <p>${this.individual.name}</p>
            <button data-id=${this.id}>EDIT</button>
          </div>
          <br><br>`;
         
    }
}
// Contact is an object we give a .all key and assign to an empty array
Contact.all = []