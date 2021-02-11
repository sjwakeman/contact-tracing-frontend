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
        //! Use JS contact container append child
        return ` 
          <div data-id=${this.id}>
            <label><strong>Name: </strong></label>${this.name}<br><br>
            <label><strong>Date: </strong></label>${this.date}<br><br>
            <label><strong>Category: </strong></label>${this.category}<br><br>
            <label><strong>Location: </strong></label>${this.location}<br><br>
            <label><strong>Occurrence: </strong></label>${this.occurrence}<br><br>
            <label><strong>Individual Name: </strong></label>${this.individual.name}<br><br>
            <button data-id=${this.id}>EDIT</button>
            <hr>
          </div>
          <br><br>`;
    }

    static findById(id) {
      // console.log("Hitting static method"); // HIT
      // console.log(id, "id 2") // CORRECT 1 "id 2" contact.js:35 
      return this.all.find(contact => contact.id === id);
    }

    updateContactCard() {
      // debugger
      // console.log(individuals, "individuals")

      return `
      <form data-id=${this.id}>
        
        <label><strong>Name: </strong></label>
          <input id='update-name' type="text" value="${this.name}" />
        <br><br>
        <label><strong>Date: </strong></label>
          <input id='update-date' type="text" value="${this.date}" />
          <br><br>
        
        <label><strong>Category: </strong></label>
          <input id='update-category' type="text" value="${this.category}" />
          <br><br>
        
        <label><strong>Location: </strong></label>
          <input id='update-location' type="text" value="${this.location}" />
          <br><br>
        
        <label><strong>Occurrence: </strong></label>
          <input id='update-occurrence' type="text" value="${this.occurrence}" />
          <br><br>

        <select name="individuals" id="individuals">       
          ${Individual.all.map(individual => {
            return `<option value="${individual.id}">"${individual.name}"</option> `
          })
          }
        </select>
   
      <br><br>
        <button type="submit" data-id=${this.id}>Save Contact</button>
      <hr>
      </form>
      `;
    }

    update({name, date, category, location, occurrence, individual}) {  // ADDED UPDATE CONTACT
      // debugger
      this.name = name;                                     // ADDED UPDATE CONTACT
      this.date = date;                                     // ADDED UPDATE CONTACT
      this.category = category;                             // ADDED UPDATE CONTACT
      this.location = location;                             // ADDED UPDATE CONTACT
      this.occurrence = occurrence;                         // ADDED UPDATE CONTACT
      this.individual = individual;               // UPDATING INDIVIDUAL NAME
    }
}
// Contact is an object we give a .all key and assign to an empty array
Contact.all = []