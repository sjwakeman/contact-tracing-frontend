class App {
    constructor() {
        this.adapter = new Adapter();
    }
    attachEventListeners() {
        document.querySelector(`#contact-container`).addEventListener("click", (e) => {
        // console.log("CLICKED"); //WORKED
            // document.querySelector(`#update`).addEventListener("click", (e) => {
                // app.js:4 Uncaught TypeError: Cannot read property 'addEventListener' of null
                // at App.attachEventListeners (app.js:4)
        e.preventDefault();
        const id = e.target.dataset.id;
        // const id = parseInt(e.target.dataset.id); // Removed parseInt() 
            // console.log(id) // 1 app.js:6  //CORRECT
            // debugger // HITS
            // console.log(document.getElementById("contact-container").innerHTML)
                //     <div data-id="1">
                //     <p><strong>contact one</strong></p>
                //     <p>March 1, 2020</p>
                //     <p>work</p>
                //     <p>office</p>
                //     <p>10</p>
                //     <p>individual one</p>
                //     <button data-id="1">EDIT</button>
                //   </div>
                //   <br><br>
    
        const contact = Contact.findById(id);
        // const name = this.name;
        // const date = this.date;
        // const category = this.category;
        // const location = this.location;
        // const occurrence = this.occurrence;
        
        // debugger
        // const individual_name = contact.individual.name // app.js:35 Uncaught TypeError: Cannot read property 'individual' of undefined
        // const individual_name = this.individual.name // app.js:38 Uncaught TypeError: Cannot read property 'name' of undefined

        // const individual_name = this.individual_name; // MAYBE RESOLUTION

        // const jsonBody = {name, date, category, location, occurrence, individual_name};
        // const bodyJSON = {name, date, category, location, occurrence, individual_name};
        // debugger

// EDIT FUNCTIONALITY HERE
        // document.querySelector('#update').innerHTML = note.renderUpdateForm();
        document.querySelector('#update').innerHTML = contact.updateContactCard(); // ONE renderUpdateContactCard

//      
        // console.log(jsonBody) // app.js:48 {name: undefined, date: undefined, category: undefined, location: undefined, occurrence: undefined, …}
       
        // this.adapter.updateContactCard(id, jsonBody).then(updateContactCard=> console.log(updateContactCard)); // TWO THREE FOUR renderUpdateContactCard
    });

    document.querySelector(`#contact-container`).addEventListener('submit', e => {
    // document.querySelector(`#update`).addEventListener('submit', e => {
    // app.js:54 Uncaught TypeError: Cannot read property 'addEventListener' of null
    // at App.attachEventListeners (app.js:54)
        e.preventDefault();
        const id = e.target.dataset.id;  
        const contact = Contact.findById(id);
        const name = this.name;
        const date = this.date;
        const category = this.category;
        const location = this.location;
        const occurrence = this.occurrence;
        const individual_name = this.individual_name;
        const jsonBody = {name, date, category, location, occurrence, individual_name};
        
        // fetch(`http://localhost:3000/api/v1/contacts/${contact.id}`, {
        //     method: "PATCH",
        //     headers:  {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //     },
        //     // body: JSON.stringify({contact:bodyJSON}),
        //     body: JSON.stringify({bodyJSON}),
        // })
        //     .then(res => res.json())
        //     // console.log("HELLO") // HITS
        //     // .then(updateContactCard => console.log(updateContactCard)); // FIVE SIX renderUpdateContactCard
        //     .then(UpdatedContact => console.log(UpdatedContact));

        this.adapter.updateContactCard(id, jsonBody).then(updatedContact => console.log(updatedContact)); // SEVEN renderUpdateContactCard
        // this.adapter.updatedContact(id, jsonBody).then(updatedContact => console.log(updatedContact));
    })

    }
}

//         fetch(`http://localhost:3000/api/v1/contacts/${contact.id}`, {
//             method: "PATCH",
//             headers:  {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//             },
//             // body: JSON.stringify({contact:bodyJSON}),
//             body: JSON.stringify({bodyJSON}),
//         })
//             .then(res => res.json())
//             // console.log("HELLO") // HITS
//             .then(updateContactCard => console.log(updateContactCard)); // EIGHT NINE renderUpdateContactCard
//              .then(UpdatedContact => console.log(UpdatedContact));
           

//         })
//     }
// }
