// html to be put into .search-results in searchForm.js
const buildRestaurantHtml = restaurant => `
<article>
  <h4>${restaurant.restaurant.name}</h4>
  <p>
      ${restaurant.restaurant.location.address}
  </p>
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