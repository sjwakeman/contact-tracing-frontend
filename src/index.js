const endPoint = "http://localhost:3000/api/v1/contacts";

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and load contacts
    getContacts()
});

function getContacts() {
    fetch(endPoint)
    .then(res => res.json())
    .then(contacts => console.log(contacts));
}

