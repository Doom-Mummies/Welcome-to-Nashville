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

// function definition to build a single park list item and attach an event listener to the save button
const buildParkListItem = (parkResult) => {
  // create the "li" element and give it a class
  const item = document.createElement("li")
  item.classList = "park-results-list-item"

  // create the description for the inside of the "li" element, 
  // give it a class, 
  // construct the text to display,
  // and append it to the "li" element
  const description = document.createElement("span")
  description.classList = "park-results-description"
  description.textContent = `${parkResult.name}: ${parkResult.address}`
  item.appendChild(description)

  // create the button for the "li" element,
  // give it a class,
  // have it display "Save" on the button,
  // attach a event listener to the button for adding it to the itinerary,
  // and then append the button to the "li" element
  const button = document.createElement("button")
  button.classList = "save-park-button"
  button.textContent = "Save"
  button.addEventListener("click", () => {
    // get a reference to the itinerary section for parks,
    // duplicate the description of the park to save,
    // remove any existing description in the park itinerary,
    // and append the cloned park description to the park itinerary section
    const parkItinerary = document.querySelector(".park-itinerary")
    const parkItineraryDesc = description.cloneNode(true)
    parkItinerary.innerHTML = ""

    parkItinerary.appendChild(parkItineraryDesc)
  })
  item.appendChild(button)

  // return the "li" element
  return item
}

// function definition for displaying park results info
const displayParkHtml = (parkResults) => {
  // create a new ordered list element for the park results section
  const parkResultsListHtml = document.createElement("ol")

  // for each park result, append a new "li" element created by buildParkListItem
  parkResults.forEach( park => {
    parkResultsListHtml.appendChild(buildParkListItem(park))
  })
  // get a reference for the search results section
  const searchResultsSection = document.querySelector("#results-container")
  // clear it out of any previous search results
  searchResultsSection.innerHTML = ""
  // append the search results to the results section
  searchResultsSection.appendChild(parkResultsListHtml)
  
}
