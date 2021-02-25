class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1";
        this.headers = { // FUTURE REFACTOR ADDED
            'Content-Type': 'application/json', // FUTURE REFACTOR                          // ADAPTER REFACTOR ADDED
            Accept: 'application/json' // FUTURE REFACTOR                                   // ADAPTER REFACTOR ADDED
        } // 
    }

    fetchContacts() {
        // return fetch(`${this.baseUrl}/contacts`).then(res => res.json());                    // ADAPTER REFACTOR REMOVED
        return this.get(`${this.baseUrl}/contacts`);                                        // ADAPTER REFACTOR ADDED
    }

    updateContactCard(id, jsonBody) { 
        // debugger // jsonBody DISPLAYS NEW CONTACT ATTRIBUTES
        
    // ADAPTER REFACTOR ADDED BELOW
        return this.patch(`${this.baseUrl}/contacts/${id}`, jsonBody)
        debugger // NOT HIT
    }

    fetchIndividuals() {
        return this.get(`${this.baseUrl}/individuals`);  
    } 

    updateIndividualCard(id, jsonBody) {
        return this.patch(`${this.baseUrl}/individuals/${id}`, jsonBody)
    }
    
    get(url) {
       return fetch(url).then(res => res.json());
    }

    patch(url, jsonBody) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({contact:jsonBody}), // DO I NEED TO INCLUDE ONE FOR ({individual:jsonBody}) ?
        }).then(res => res.json());
    }
}