const handleSearch = event => {
    console.log(event)
    const inputField = document.querySelector("input.restaurantInput")
    console.log("user input", inputField.value)
  
    searchResaurants(inputField.value)
    .then(response => {
      console.log(response)
      displayRestaurantHtml(response.restaurant)
      inputField.value = ""
    })
  }
  
  const attachEventListenerToRestaurantSearchButton = () => {
    const restaurantSearchButton = document.getElementById("restaurant-search-button")
    restaurantSearchButton.addEventListener("click", handleSearch)
  }