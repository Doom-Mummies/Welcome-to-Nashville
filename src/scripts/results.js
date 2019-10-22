// This creates the HTML that will be put in the results section upon search for Meetups
const buildMeetupHtml = events => `
 <section class="meetupEvent">
 ${events.name.html}${events.description.html}
 <button id="save-button">Search</button>
 </section>`

// This function loops through the search results (events),creates an HTML element to hold the results , and appends them to the DOM in the results container
const displayMeetupHtml = allMeetups => {
  let MeetupSearchResultsHtml = ""
  allMeetups.forEach(events => {
    let meetupHtml = buildMeetupHtml(events)
    MeetupSearchResultsHtml += meetupHtml
  })
  const searchResultsSection = document.querySelector("#results-container")
  searchResultsSection.innerHTML = MeetupSearchResultsHtml
}


