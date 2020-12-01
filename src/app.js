class App {
    attachEventListeners() {
        document.querySelector(`#contact-container`).addEventListener("click", (e) => {
            // console.log("CLICKED"); //WORKED
        const id = e.target.dataset.id;
        // const id = parseInt(e.target.dataset.id); // Removed parseInt() 
            // console.log(id) // 1 app.js:6  //CORRECT
            // debugger // HITS
            // console.log(document.getElementById("contact-container").innerHTML)
                //     <div data-id="1">
                //     <h3>contact one</h3>
                //     <p>March 1, 2020</p>
                //     <p>work</p>
                //     <p>office</p>
                //     <p>10</p>
                //     <p>individual one</p>
                //     <button data-id="1">EDIT</button>
                //   </div>
                //   <br><br>
    
        const contact = Contact.findById(id)
        // debugger
        console.log(contact) // undefined app.js:21 

        })
    }
}
