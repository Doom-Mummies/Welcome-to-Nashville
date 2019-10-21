const apiBaseUrl = "https://developers.zomato.com/api"

const searchResaurants = searchInput => fetch(`${apiBaseUrl}search?key=${zomatoApiKey}&q=${searchInput}`)
.then(response => response.json())


// goes in events.js when event is made
searchRecipes(inputField.value)
.then(response => {
  // console.log(response.restuarant)
  displayRestaurantsHtml(response.restaurant)
  inputField.value = ""
})
