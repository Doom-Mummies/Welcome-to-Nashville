const buildAndAppendParkDropdownToSearchForm = () => {
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

    const parkFeaturesSelectElement = document.createElement("select")
    parkFeaturesSelectElement.id = "park-features-dropdown"

    parkFeaturesSelectElement.innerHTML = `<option disabled selected value>parks by feature</option>`

    const buildDropdown = () => {
        for (let feature in parkFeatures) {
            const option = document.createElement("option")
            option.value = feature
            option.innerHTML = parkFeatures[feature]
            parkFeaturesSelectElement.appendChild(option)
        }
    }

    buildDropdown()
    const container = document.querySelector(".search-form");

    const button = document.createElement("button")
    button.id = "park-search-button"
    button.textContent = "Search"

    container.appendChild(parkFeaturesSelectElement);
    container.appendChild(button)
};
