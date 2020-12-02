class App {
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
    
        const contact = Contact.findById(id)
        const name = this.name
        const date = this.date
        const category = this.category
        const occurrence = this.occurrence
        const individual_name = contact.individual.name
        const bodyJSON = {name, date, category, occurrence, individual_name};
        // debugger
        fetch(`http://localhost:3000/api/v1/contacts/${contact.id}`, {
            method: "PATCH",
            headers:  {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({contact:bodyJSON}),
        })
            .then(res => res.json())
            // console.log("HELLO") // HITS
            .then(renderUpdateContactCard => console.log(renderUpdateContactCard));
           

        })
    }
}
