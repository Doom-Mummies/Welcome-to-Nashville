// function definition to build the "search parks by feature" dropdown and search button, then append to the search-form
const buildAndAppendParkDropdownToSearchForm = () => {
    // object containing the park features. The key becomes the parameter sent to the API, and the value is what is displayed in the HTML dropdown box
    const parkFeatures = {
        "community_center": "Community Center",
        "nature_center": "Nature Center",
        "playground": "Playgrounds",
        "ada_accessible": "ADA Accessible",
        "restrooms_available": "Restrooms Available",
        "picnic_shelters": "Picnic Shelters",
        "dog_park": "Dog Park",
        "baseball_fields": "Baseball Fields",
        "basketball_courts": "Basketball Courts",
        "volleyball": "Volleyball",
        "soccer_fields": "Soccer Fields",
        "football_multi_purpose_fields": "Football Fields",
        "tennis_courts": "Tennis Courts",
        "disc_golf": "Disc Golf",
        "skate_park": "Skate Park",
        "swimming_pool": "Swimming Pool",
        "spray_park": "Spray Park",
        "golf_course": "Golf Course",
        "walk_jog_paths": "Walk/Jog Paths",
        "hiking_trails": "Hiking Trails",
        "horse_trails": "Horse Trails",
        "mountain_bike_trails": "Mountain Bike Trails",
        "boat_launch": "Boat Launch",
        "camping_available_by_permit": "Camping Available (By Permit)",
        "fishing_by_permit": "Fishing (By Permit)",
        "lake": "Lake",
        "canoe_launch": "Canoe Launch",
        "community_garden": "Community Garden",
        "historic_features": "Historic Features",
    }

    // create a select element to be the dropdown
    const parkFeaturesSelectElement = document.createElement("select")
    // give the select element an id to reference in events.js
    parkFeaturesSelectElement.id = "park-features-dropdown"

    // make the first option in the select element a descriptor on what is being searched
    parkFeaturesSelectElement.innerHTML = `<option disabled selected value>parks by feature</option>`

    // function definition to construct and append all of the option elements inside the select element
    const buildDropdown = () => {
        // loop through each key:value pair inside the parkFeatures object
        for (let feature in parkFeatures) {
            // create a new option element
            const option = document.createElement("option")
            // set the option value to be the key
            option.value = feature
            // set the option text to be the key's value
            option.innerHTML = parkFeatures[feature]
            // append the option to the select element
            parkFeaturesSelectElement.appendChild(option)
        }
    }

    // function call to build the dropdown element
    buildDropdown()
    // get a reference to the search-form
    const container = document.querySelector(".search-form");

    // create a new button element
    const button = document.createElement("button")
    // set the button's id for referencing in events.js
    button.id = "park-search-button"
    // set the button's text to show "Search"
    button.textContent = "Search"

    // append the dropdown to the search-form using the "container" reference
    container.appendChild(parkFeaturesSelectElement);
    // append the park search button to the search-form using the "container" reference
    container.appendChild(button)
};
