// Create a file src/index.js and link it to it from index.html
class Individual {
    constructor(individual, individualAttributes) {
        this.id = individual.id;   // Top level
        // debugger
        
        this.name = individualAttributes.name;
        this.contact = individualAttributes.contact
        // Push all instances of this into an empty array
        Individual.all.push(this);
        // debugger
    }

    renderIndividualCard() {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object   
        debugger  
        //! Use JS contact container append child
        return ` 
          <div data-id=${this.id}>
            <label><strong>Name: </strong></label>${this.name}<br><br>
            <label><strong>Contact Name: </strong></label>${this.contact.name}<br><br>
            <button data-id=${this.id}>EDIT</button>
          </div>
          <br><br>`;
    }

    static findById(id) {
      // console.log("Hitting static method"); // HIT
      // console.log(id, "id 2") // CORRECT 1 "id 2" contact.js:35 
      return this.all.find(individual => individual.id === id);
    }

    updateIndividualCard() {
      return `
      <form data-id=${this.id}>
        
        <label><strong>Name: </strong></label>
          <input id='update-name' type="text" value="${this.name}" />
        <br><br>
        
        <label><strong>Contact Name: </strong></label>
        <select id="contacts" />
        <option value="1">contact one</option>
        <option value="2">contact two</option>
        <option value="3">contact three</option>
      </select>
      <br><br>
        <button type="submit" data-id=${this.id}>Save Individual</button>
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

    update({name, contact}) {  // ADDED UPDATE CONTACT
      // debugger
      this.name = name;                                     // ADDED UPDATE CONTACT
      this.contact = contact;               // UPDATING INDIVIDUAL NAME
    }
}
// Contact is an object we give a .all key and assign to an empty array
Individual.all = []