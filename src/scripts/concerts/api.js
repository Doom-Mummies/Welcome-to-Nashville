console.log("this has changed");

fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=LJiodGFvXhaw9a8blqRbrMKTj4aiYv2Z&stateCode=TN&classificationName=music&dmaID=343")
    .then(rawApiData => rawApiData.json())
    .then(parsedApiData => {
        console.log(parsedApiData)
    })