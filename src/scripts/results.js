// This creates the HTML that will be put in the results section upon search for Meetups
const buildMeetupHtml = events => `
 <li class="meetup-results-list-item" id="${idNumber++}">
 <span class="meetup-results-description">${events.name.text}: ${events.description.text}</span>
 <button id="save-button">Save</button>
 </li>`

// This declares a variable for the ID number
idNumber = 1

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


// build up park list element with save button
const buildParkListItem = parkResult => `
  <li class="park-results-list-item">
    <span class="park-results-description">${parkResult.name}: ${parkResult.address}</span>
    <button class="save-park-button">Save</button>
  </li>
`

// construct and display park html
const displayParkHtml = parkResults => {
  // hold the list items created
  let parkResultsListHtml = ``

  // for each park in the results list
  parkResults.forEach( park => {
    // build and append to parkResultsListHtml
    parkResultsListHtml += buildParkListItem(park)
  })

  // get a reference to the results container
  const searchResultsSection = document.querySelector("#results-container")

  // construct the park results ordered list with list items
  const parkResultsHtml = `<ol class="park-results-list">${parkResultsListHtml}</ol>`

  // replace the results section with park search results
  searchResultsSection.innerHTML = parkResultsHtml
}