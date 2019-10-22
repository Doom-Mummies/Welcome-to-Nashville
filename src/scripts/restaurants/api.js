const apiBaseUrl = "https://developers.zomato.com/api"

const searchResaurants = searchInput => 
    fetch(`${apiBaseUrl}/v2.1/search?entity_id=1138&entity_type=city&q=${searchInput}&sort=rating}`,{
    headers:{
        Accept: "application/json",
        "user-key": `${zomatoApiKey}`}})
    .then(response => response.json())

