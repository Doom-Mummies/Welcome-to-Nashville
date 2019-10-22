//Base URL for TicketMaster API
const ticketMasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json"

// !!CURRENTLY NOT OPERATIONAL!!: Takes the info the user inputs in the search field and runs an API call using that info. By default, the call filters by state (TN), classification of "music" (as opposed to festivals or somethign else), and DMA ID (the number "343" relates to Nashville.)
const searchTicketMaster = (searchInput) => fetch(`${ticketMasterBaseUrl}?${concertsTicketMasterKey}&stateCode=TN&classificationName=music&dmaID=343&${searchInput}`)
    .then(rawApiData => rawApiData.json()) //Takes the results and parses it 