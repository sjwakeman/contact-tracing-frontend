class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1";
        // this.headers = { // FUTURE REFACTOR
        //     'Content-Type': 'application/json', // FUTURE REFACTOR
        //     Accept: 'application/json' // FUTURE REFACTOR
        // } // FUTURE REFACTOR
    }
    fetchContacts() {
        return fetch(`${this.baseUrl}/contacts`).then(res => res.json());
    }
    updateContactCard(id, jsonBody) { // ONE renderUpdateContactCard
        // debugger
        return fetch(`${this.baseUrl}/contacts/${id}`, {
            method: "PATCH",
            headers:  {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({contact:jsonBody}), // CORRECTED CHANGED FROM bodyJSON TO jsonBody
        }).then(res => res.json());
    }
}