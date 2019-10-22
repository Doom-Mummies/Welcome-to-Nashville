// base url for Nashville Parks API
const parksURL = "https://data.nashville.gov/resource/74d7-b74t.json"

// fetch api data - all "features" in the park are keys. This searches for and returns any keys that have a value of "Yes"
const searchParksForFeatures = (searchInput) => fetch(`${parksURL}?${searchInput}=Yes`)
    // convert to json
    .then(response => response.json())
