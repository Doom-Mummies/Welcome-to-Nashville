const buildAndAppendParkDropdown = () => {
    const parkFeatures = {
        "volleyball": "Volleyball",
        "tennis_courts": "Tennis Courts",
        "hiking_trails": "Hiking Trails",
        "community_center": "Community Center",
        "nature_center": "Nature Center",
        "playground": "Playgrounds",
        "ada_accessible": "ADA Accessible",
        "restrooms_available": "Restrooms Available",
    }
/*
        "picnic_shelters": "Yes",
        "picnic_shelters_quantity": "9",
        "dog_park": "Yes",
        "baseball_fields": "Yes",
        "basketball_courts": "Yes",
        "volleyball": "No",
        "soccer_fields": "No",
        "football_multi_purpose_fields": "No",
        "tennis_courts": "Yes",
        "disc_golf": "Yes",
        "skate_park": "No",
        "swimming_pool": "No",
        "spray_park": "No",
        "golf_course": "Yes",
        "walk_jog_paths": "Yes",
        "hiking_trails": "No",
        "horse_trails": "No",
        "mountain_bike_trails": "No",
        "boat_launch": "Yes",
        "camping_available_by_permit": "No",
        "fishing_by_permit": "Yes",
        "lake": "Yes",
        "canoe_launch": "No",
        "community_garden": "No",
        "historic_features": "No",
*/
    const parkFeaturesSelectElement = document.createElement("select")
    parkFeaturesSelectElement.id = "park__features"

    const buildDropdown = () => {
        // parkFeatures.forEach((feature) => {
        for (let feature in parkFeatures) {
            const option = document.createElement("option")
            option.value = feature
            option.innerHTML = parkFeatures[feature]
            parkFeaturesSelectElement.appendChild(option)
        }
    }

    buildDropdown()
    const container = document.querySelector("#search-form");

    container.appendChild(parkFeaturesSelectElement);
};
