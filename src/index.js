const endPoint = "http://localhost:3000/api/v1/contacts";
 
document.addEventListener('DOMContentLoaded', () => {
    getContacts()
});
 
function getContacts() {
    fetch(endPoint)
    .then(res => res.json())
    .then(contacts => {
 
        // remember our JSON data is a bit nested due to our serializer
        contacts.data.forEach(contact => {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        const contactMarkup = `
          <div data-id=${contact.id}>
            <h3>${contact.attributes.name}</h3>
            <p>${contact.attributes.date}</p>
            <p>${contact.attributes.category}</p>
            <p>${contact.attributes.location}</p>
            <p>${contact.attributes.occurrence}</p>
            <p>${contact.attributes.individual.name}</p>
            <button data-id=${contact.id}>edit</button>
          </div>
          <br><br>`;
 
          document.querySelector('#contact-container').innerHTML += contactMarkup
        })
    }) 
}


