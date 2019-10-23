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
const handleSave = event => {
  console.log(event)
  const resultField = document.getElementById(`save-button-${index}`)//change this part
      console.log("saved result", resultField.value)
  
  // resaurants(resultField.value)
  
  //   console.log()
  //   displayRestaurantHtml()
  //   resultField.value = ""
  //   })
    }

  // tells when user clicks save button
  const attachEventListenerToRestaurantSaveButton = () => {
    const restaurantSaveButton = document.querySelectorAll(".save-button")
    restaurantSaveButton.forEach(button => {
      button.addEventListener("click", handleSave)
    }
    )
  }

