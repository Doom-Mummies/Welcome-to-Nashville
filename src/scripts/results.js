const buildRestaurantHtml = restaurant => `
<article>
  <h4>${restaurants.restaurant.name}</h4>
  <p>
      ${restaurants.restaurant.location.address}
  </p>
</article>
`


const displayRestaurantHtml = allRestaurants => {
  let restaurantResultsHtml = ""
  allRestaurants.forEach(restaurant => {
    let restaurantHtml = buildRestaurantHtml(restaurant)
    restaurantResultsHtml += restaurantHtml
  });

  const restaurantSearchResultsSection = document.querySelector(".search-results")
  restaurantSearchResultsSection.innerHTML = restaurantResultsHtml
}