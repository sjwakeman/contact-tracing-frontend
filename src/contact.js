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
          </div>
          <br><br>`;

        // return ` // ORIGINAL
        //   <div data-id=${this.id}>
        //   <p><strong>${this.name}</strong></p>
        //     <p>${this.date}</p>
        //     <p>${this.category}</p>
        //     <p>${this.location}</p>
        //     <p>${this.occurrence}</p>
        //     <p>${this.individual.name}</p>
        //     <button data-id=${this.id}>EDIT</button>
        //   </div>
        //   <br><br>`;
    }

    static findById(id) {
      // console.log("Hitting static method"); // HIT
      // console.log(id, "id 2") // CORRECT 1 "id 2" contact.js:35 
      return this.all.find(contact => contact.id === id);
    }

    updateContactCard() {
      // debugger
      // console.log(individuals, "individuals")
      console.log(Individual.all, "Individual.all - contact.js file")
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
        
        <select id="individuals">       
          Individual.all.forEach(individual) {
            <option value="#">"${this.individual.name}"</option>
          }
        </select>
    
      <br><br>
        <button type="submit" data-id=${this.id}>Save Contact</button>
      </form>
      `;

      // return ` // ORIGINAL
      // <form data-id=${this.id}>
      //   <label>Name</label>
      //   <p>
      //     <input id='update-name' type="text" value="${this.name}" />
      //   </p>
      //   <label>Date</label>
      //   <p>
      //     <input id='update-date' type="text" value="${this.date}" />
      //   </p>
      //   <label>Category</label>
      //   <p>
      //     <input id='update-category' type="text" value="${this.category}" />
      //   </p>
      //   <label>Location</label>
      //   <p>
      //     <input id='update-location' type="text" value="${this.location}" />
      //   </p>
      //   <label>Occurrence</label>
      //   <p>
      //     <input id='update-occurrence' type="text" value="${this.occurrence}" />
      //   </p>
      //   <label>Individual Name</label>
      //   <p>
      //   <select id="individuals" />
      //   <option value="1">individual one</option>
      //   <option value="2">individual two</option>
      //   <option value="3">individual three</option>
      // </select>
      //   </p>
      //   <button type="submit" data-id=${this.id}>Save Contact</button>
      // </form>
      // `;
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