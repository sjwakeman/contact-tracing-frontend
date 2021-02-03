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
        
        // console.log(this, "this") 
        // adapter.js:11 Adapter {baseUrl: "http://localhost:3000/api/v1", headers: {…}} "this"
        // console.log(`${this.baseUrl}`, "`${this.baseUrl}`") 
        //adapter.js:13 http://localhost:3000/api/v1 `${this.baseUrl}
        // console.log(`${this.baseUrl}/contacts`,"`${this.baseUrl}/contacts`",) 
        //adapter.js:14 http://localhost:3000/api/v1/contacts `${this.baseUrl}/contacts`
        // console.log(this.get(`${this.baseUrl}/contacts`), "this.get(`${this.baseUrl}/contacts`)")
       // adapter.js:15 Promise {<pending>}__proto__: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: TypeError: Failed to fetch "this.get(`${this.baseUrl}/contacts`)"
        return this.get(`${this.baseUrl}/contacts`);                                        // ADAPTER REFACTOR ADDED
    }
    updateContactCard(id, jsonBody) { 
        // debugger
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

    fetchIndividuals() {
        // console.log(this, "this")
        // adapter.js:36 Adapter {baseUrl: "http://localhost:3000/api/v1", headers: {…}} "this"
        // console.log(`${this.baseUrl}`, "`${this.baseUrl}`") 
        // adapter.js:38 http://localhost:3000/api/v1 `${this.baseUrl}`
        // console.log(`${this.baseUrl}/individuals`,"`${this.baseUrl}/indviduals`")
        // adapter.js:40 http://localhost:3000/api/v1/individuals `${this.baseUrl}/indviduals`
        // console.log(this.get(`${this.baseUrl}/individuals`), "this.get(`${this.baseUrl}/individuals`)")
        // adapter.js:45 Promise {<pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Object "this.get(`${this.baseUrl}/individuals`)"

        // console.log(this.get(`${this.baseUrl}/individuals`))
        // adapter.js:48 Promise {<pending>}
        return this.get(`${this.baseUrl}/individuals`);  
    } 

    updateIndividualCard(id, jsonBody) {
        return this.patch(`${this.baseUrl}/individuals/${id}`, jsonBody)
    }
    
    get(url) {
        // console.log(url, "url") // adapter.js:33 http://localhost:3000/api/v1/contacts url
        // console.log(fetch(url).then(res => res.json()), "fetch(url).then(res => res.json())")
            // Promise {<pending>}__proto__: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: TypeError: Failed to fetch 
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