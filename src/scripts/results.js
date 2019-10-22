// This creates the HTML that will be put in the results section upon search for Meetups
const buildMeetupHtml = events => `
 <section class="meetupEvent">
 ${events[0].name.html}${events[0].description.html}
 </section>`


const displayMeetupHtml = allMeetups => {
  let MeetupSearchResultsHtml = ""
  allMeetups.forEach(events => {
    let meetupHtml = buildMeetupHtml(events)
    MeetupSearchResultsHtml += meetupHtml
  })
  const searchResultsSection = document.querySelector("#results-container")
  searchResultsSection.innerHTML = MeetupSearchResultsHtml
}


