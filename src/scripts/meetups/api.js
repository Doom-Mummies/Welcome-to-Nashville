
    // .then(results => console.log(results));


    const searchMeetups= userInput => fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(result => result.json())