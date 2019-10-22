const ticketMasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json" //Base URL for TicketMaster API

const searchTicketMaster = (searchInput) => fetch(`${ticketMasterBaseUrl}?${concertsTicketMasterKey}&stateCode=TN&classificationName=music&dmaID=343&${searchInput}`)
    .then(rawApiData => rawApiData.json()) //Takes the results and parses it 