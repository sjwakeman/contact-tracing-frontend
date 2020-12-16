// Create a file src/contact.js and link it to it from index.html
class Contact {
    constructor(contact, contactAttributes) {
    // constructor(id, contactAttributes) {
        this.id = contact.id;   // Top level
        // debugger
        
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
          <p><strong>${this.name}</strong></p>
            <p>${this.date}</p>
            <p>${this.category}</p>
            <p>${this.location}</p>
            <p>${this.occurrence}</p>
            <p>${this.individual.name}</p>
            <button data-id=${this.id}>EDIT</button>
          </div>
          <br><br>`;
    }

    static findById(id) {
      // console.log("Hitting static method"); // HIT
      // console.log(id, "id 2") // CORRECT 1 "id 2" contact.js:35 
      return this.all.find(contact => contact.id === id);
    }

    updateContactCard() {
      return `
      <form data-id=${this.id}>
        <label>Name</label>
        <p>
          <input type="text" value="${this.name}" />
        </p>
        <label>Date</label>
        <p>
          <input type="text" value="${this.date}" />
        </p>
        <label>Category</label>
        <p>
          <input type="text" value="${this.category}" />
        </p>
        <label>Location</label>
        <p>
          <input type="text" value="${this.location}" />
        </p>
        <label>Occurrence</label>
        <p>
          <input type="text" value="${this.occurrence}" />
        </p>
        <button type="submit" data-id=${this.id}>Save Contact</button>
      </form>
      `;
    }

    // updateContactCard() { 
    //   // return this.renderContactCard()
    // debugger 
    // // displays values of contact attributes below
    //   return `
    //   <div data-id=${this.id}>
    //   <p><strong>${this.name}</strong></p>
    //   <p>${this.date}</p>
    //   <p>${this.category}</p>
    //   <p>${this.location}</p>
    //   <p>${this.occurrence}</p>
    //   <p>${this.individual.name}</p>
    //   <button type="submit" data-id=${this.id}>Save Contact</button>
    // </div>
    // <br><br>`;
    // }
}
// Contact is an object we give a .all key and assign to an empty array
Contact.all = []