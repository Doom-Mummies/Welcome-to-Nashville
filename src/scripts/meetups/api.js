// This fetches the data from the API and parses the results as json
const searchMeetups = userInput => fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
  .then(result => result.json())
