class App {
    attachEventListeners() {
        document.querySelector(`#contact-container`).addEventListener("click", (e) => {
            console.log("CLICKED");
        })
    }
}
