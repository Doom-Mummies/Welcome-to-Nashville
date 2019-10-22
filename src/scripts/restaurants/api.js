const apiBaseUrl = "https://developers.zomato.com/api"

const searchResaurants = searchInput => fetch(`${apiBaseUrl}/search?apikey=${zomatoApiKey}&q=${searchInput}`)
.then(response => response.json())