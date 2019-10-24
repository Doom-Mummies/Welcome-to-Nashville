// holds what a user types into search field
const handleSearch = event => {
    console.log(event)
    const inputField = document.querySelector("input.restaurantInput")
    console.log("user input", inputField.value)
  
    searchResaurants(inputField.value)
    .then(response => {
      console.log(response)
      displayRestaurantHtml(response.restaurants)
      inputField.value = ""
    })
  }

  // tells when user clicks search button
  const attachEventListenerToRestaurantSearchButton = () => {
    const restaurantSearchButton = document.getElementById("restaurant-search-button")
    restaurantSearchButton.addEventListener("click", handleSearch)
  }
  




// save button event listener
const handleRestaurantSave = index => {
  const resultField = document.getElementById(`save-text-${index}`)
  console.log(`saved result (${index})`, resultField.innerText)

  // update database.json
  putUpdatedField("restaurant", resultField.textContent)

  const restaurantItinerarySection = document.querySelector(".restaurant-itinerary")
  restaurantItinerarySection.innerText = resultField.innerText
}

// tells when user clicks save button
const attachEventListenerToRestaurantSaveButton = index => {
  const restaurantSaveButton = document.getElementById(`save-button-${index}`)
  restaurantSaveButton.addEventListener(
    "click",
    function () { handleRestaurantSave(index) }
  )
}