const searchMeetups = userInput => fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
  .then(result => result.json())
// .then(results => console.log(results));

const attachEventListenerToSearchButton = () => {
  const searchButton = document.querySelector("#meetups-search-button")
  searchButton.addEventListener("click", handleMeetupSearch)
}

const handleMeetupSearch = event => {
  // console.log(event)
  const inputField = document.getElementById("input-3")
  console.log("user input", inputField.value)
}


 const buildMeetupHtml = events => `
 <section class="meetupEvent">
 ${events[0].name.html}${events[0].description.html}
 </section>`









