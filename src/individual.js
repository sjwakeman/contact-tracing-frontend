// Create a file src/individual.js and link it to it from index.html
class Individual {
    constructor(individual, individualAttributes) {
        this.id = individual.id;   // Top level
        // debugger
        
        this.name = individualAttributes.name;
        this.contact = individualAttributes.contact // MAY NOT NEED THIS FEATURE
        // Push all instances of this into an empty array
        
        // console.log(Individual.all, "Individual.all individual.js file")
        // individual.js:10 [] "Individual.all individual.js file" // EMPTY ARRAY
        // individual.js:10 [Individual] "Individual.all individual.js file"
        // [Individual] // INDIVIDUAL ARRAY GETS ALL THREE INDIVIDUAL
        // 0: Individual {id: "1", name: "individual one", contact: undefined}
        // 1: Individual {id: "2", name: "individual two", contact: undefined}
        // 2: Individual {id: "3", name: "individual three", contact: undefined}
        // length: 3
        // __proto__: Array(0)
        Individual.all.push(this);
        // console.log(Individual.all, "Individual.all.push(this)")
        // [Individual]
        // 0: Individual {id: "1", name: "individual one", contact: undefined}
        // 1: Individual {id: "2", name: "individual two", contact: undefined}
        // 2: Individual {id: "3", name: "individual three", contact: undefined}
        // length: 3
        // __proto__: Array(0)
    }

    renderIndividualCard() {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object   
        // debugger  
        //! Use JS contact container append child

        // <option value=\`${individual.id}`>Chosse an Individual </option>
        return ` 
          <div data-id=${this.id}>
            <label><strong>Name: </strong></label>${this.name}<br><br>
        
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
      return `
      <form data-id=${this.id}>
        
        <label><strong>Name: </strong></label>
          <input id='update-name' type="text" value="${this.name}" />
        <br><br>
        
        <label><strong>Contact Name: INDIVIDUAL.JS FILE</strong></label>
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
// Individual is an object we give a .all key and assign to an empty array
Individual.all = []