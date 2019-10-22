const apiBaseUrl = "https://developers.zomato.com/api"

const searchResaurants = searchInput => 
    fetch(`${apiBaseUrl}/v2.1/search?entity_id=1138&entity_type=city&q=${searchInput}&sort=rating}`)
        "user-key: ${zomatoApiKey}",
        "method: GET",
        "headers:" 
            "Accept: application/json"
        
    .then(response => response.json())

