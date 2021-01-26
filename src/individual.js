// Create a file src/individual.js and link it to it from index.html
class Individual {
    constructor(individual, individualAttributes) {
        this.id = individual.id;   // Top level
        // debugger
        
        this.name = individualAttributes.name;
        this.contact = individualAttributes.contact // MAY NOT NEED THIS FEATURE
        // Push all instances of this into an empty array
        Individual.all.push(this);
        // debugger
    }

    renderIndividualCard() {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object   
        // debugger  
        //! Use JS contact container append child

        // MAY NOT NEED LINE 23 IFF ONLY NEED NAME ATTRIBUTE
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
      // console.log(id, "id 2") // CORRECT 1 "id 2" individual.js:35 
      return this.all.find(individual => individual.id === id);
    }

    updateIndividualCard() {
    // MAY NOT NEED LINES 45 - 49
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
    }

    update({name, individual}) {  // ADDED UPDATE CONTACT
      // debugger
      this.name = name;                                     // ADDED UPDATE CONTACT
      this.individual = individual;               // UPDATING INDIVIDUAL NAME
    }
}
// Contact is an object we give a .all key and assign to an empty array
Individual.all = []