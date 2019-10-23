//Base URL for TicketMaster API
const ticketMasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json"

// !!CURRENTLY NOT OPERATIONAL!!: Takes the info the user inputs in the search field and runs an API call using that info. By default, the call filters by state (TN), classification of "music" (as opposed to festivals or somethign else), and DMA ID (the number "343" relates to Nashville.)
const searchTicketMaster = (searchInput) => fetch(`${ticketMasterBaseUrl}?apikey=${concertsTicketMasterKey}&stateCode=TN&classificationName=music&dmaID=343&classificationName=${searchInput}`)
    .then(rawApiData => rawApiData.json()) //Takes the results, parses it, and then...
    .then(searchResults => {
        console.log((searchResults._embedded.events))
        // displaySearchResults(searchResults._embedded.events)
    }) //...Runs the following function, passing only the "events" information in. Function definition is on "results.js"