// const searchMeetups = userInput => fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
// .then(result => result.json())
// .then(results => console.log(results));

const attachEventListenerToSearchButton = () => {
  const searchButton = document.querySelector("#meetups-search-button")
  searchButton.addEventListener("click", handleMeetupSearch)
}

// const buildMeetupHtml = events => `
// <section class="meetupEvent">
// <p>${events.venue.name}${events.venue.address}</p>
// </section>`

// const displayMeetupHtml = allMeetups => {
//   let MeetupSearchResultsHtml = ""
//   allMeetups.forEach(event => {
//     let MeetupHtml = buildRecipeHtml(event)
//     MeetupSearchResultsHtml += buildMeetupHtml
//   });

//   const searchResultsSection = document.querySelector("#results-container")
//   searchResultsSection.innerHTML = MeetupSearchResultsHtml
//   console.log(MeetupSearchResultsHtml)
// }

    const handleMeetupSearch = event => {
        console.log(event)
        const inputField = document.getElementById("input-3")
        console.log("user input", inputField.value)
      
        // searchMeetups(inputField.value)
        // .then(results => {
        //   console.log(response.events)
        //   displayMeetupHtml(results.events)
        //   inputField.value = ""
        // })
      }
      







