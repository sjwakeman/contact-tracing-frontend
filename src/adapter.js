class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1";
        this.headers = { // FUTURE REFACTOR ADDED
            'Content-Type': 'application/json', // FUTURE REFACTOR                          // ADAPTER REFACTOR ADDED
            Accept: 'application/json' // FUTURE REFACTOR                                   // ADAPTER REFACTOR ADDED
        } // FUTURE REFACTOR ADDED
    }
    fetchContacts() {
        // return fetch(`${this.baseUrl}/contacts`).then(res => res.json());                    // ADAPTER REFACTOR REMOVED
        return this.get(`${this.baseUrl}/contacts`);                                        // ADAPTER REFACTOR ADDED
    }
    updateContactCard(id, jsonBody) { 
        //  debugger
        // return fetch(`${this.baseUrl}/contacts/${contact.id}`, { 
        // return fetch(`${this.baseUrl}/contacts/${id}`, {  // ORIGINAL                       // ADAPTER REFACTOR REMOVED
        //     method: "PATCH",                                                                // ADAPTER REFACTOR REMOVED
        //     headers:  {                                                                     // ADAPTER REFACTOR REMOVED
        //         'Content-Type': 'application/json',                                         // ADAPTER REFACTOR REMOVED
        //         Accept: 'application/json',                                                 // ADAPTER REFACTOR REMOVED
        //     },                                                                              // ADAPTER REFACTOR REMOVED
        //     body: JSON.stringify({contact:jsonBody}), // CORRECTED CHANGED FROM bodyJSON TO jsonBody    // ADAPTER REFACTOR REMOVED
        // }).then(res => res.json());                                                         // ADAPTER REFACTOR REMOVED
    
    // ADAPTER REFACTOR ADDED BELOW
        return this.patch(`${this.baseUrl}/contacts/${id}`, jsonBody)
    }

    get(url) {
        return fetch(url).then(res => res.json());
    }

    patch(url, jsonBody) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({contact:jsonBody}),
        }).then(res => res.json());
    }
}