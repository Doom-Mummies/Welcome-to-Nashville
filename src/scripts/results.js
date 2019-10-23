// This creates the HTML that will be put in the results section upon search for Meetups
const buildMeetupHtml = events => `
 <li class="meetup-results-list-item">
 <span class="meetup-results-description">${events.name.text}: ${events.description.text}</span>
 <button id="save-button">Save</button>
 </section>`

// This function loops through the search results (events),creates an HTML element to hold the results , and appends them to the DOM in the results container
const displayMeetupHtml = allMeetups => {
  let meetupSearchResultsHtml = ``
  allMeetups.forEach(events => {
    let meetupHtml = buildMeetupHtml(events)
    meetupSearchResultsHtml += meetupHtml
  })
  const searchResultsSection = document.querySelector("#results-container")

  // construct the park results ordered list with list items
  const meetupResultsHtml = `<ol class="park-results-list">${meetupSearchResultsHtml}</ol>`

  // replace the results section with park search results
  searchResultsSection.innerHTML = meetupResultsHtml


}





// html to be put into .search-results in searchForm.js
const buildRestaurantHtml = restaurant => `
<article>
  <h4>${restaurant.restaurant.name}</h4>
  <p>
      ${restaurant.restaurant.location.address}
  </p>
  <button id = "save-button">Save</button>
</article>
`


const displayRestaurantHtml = allRestaurants => {
  let restaurantResultsHtml = ""
  let restaurantNum = 1
  allRestaurants.forEach(restaurants => {
    if(restaurantNum <= 4){
    console.log(restaurants)
    let restaurantHtml = buildRestaurantHtml(restaurants)
    restaurantResultsHtml += restaurantHtml
    restaurantNum++
  }});


  const restaurantSearchResultsSection = document.querySelector(".search-results")
  restaurantSearchResultsSection.innerHTML = restaurantResultsHtml
}


const buildParkListItem = (parkResult) => {
  const item = document.createElement("li")
  item.classList = "park-results-list-item"

  const description = document.createElement("span")
  description.classList = "park-results-description"
  description.textContent = `${parkResult.name}: ${parkResult.address}`
  item.appendChild(description)

  const button = document.createElement("button")
  button.classList = "save-park-button"
  button.textContent = "Save"
  button.addEventListener("click", () => {
    const parkItinerary = document.querySelector(".park-itinerary")
    const parkItineraryDesc = description.cloneNode(true)
    parkItinerary.innerHTML = ""

    parkItinerary.appendChild(parkItineraryDesc)
  })
  item.appendChild(button)

  return item
}

const displayParkHtml = (parkResults) => {
  const parkResultsListHtml = document.createElement("ol")

  parkResults.forEach( park => {
    parkResultsListHtml.appendChild(buildParkListItem(park))
  })
  const searchResultsSection = document.querySelector("#results-container")
  searchResultsSection.innerHTML = ""
  searchResultsSection.appendChild(parkResultsListHtml)
  
}
