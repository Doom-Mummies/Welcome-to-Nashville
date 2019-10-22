// const numberOfResults = 5

// const selectRandomResults = (arrayOfResults, numberToSelect) => {
//     const indexes = []
//     const results = []

//     if (arrayOfResults.length <= numberToSelect) {
//         return arrayOfResults
//     }
//     while(indexes.length < numberToSelect) {
//         const number = Math.floor(Math.random() * arrayOfResults.length)
//         if (!indexes.includes(number, 0)) {
//             indexes.push(number)
//         }
//     }
//     indexes.forEach(index => {
//         results.push(arrayOfResults[index])
//     })
//     console.log("results", results)

//     return results
// }

// function definition for handling search on button click
const handleSearch = () => {
    // get a reference to the dropdown element
    const parkFeaturesDropdown = document.querySelector(
        "#park-features-dropdown"
    );

    // function call to fetch the data based on the value from the dropdown
    searchParksForFeatures(parkFeaturesDropdown.value).then(response => {
        const parkResults = []
        // loop through each park object to capture name and address
        response.forEach(park => {
            // set park name
            const name = park.park_name
            // set address. The "park.mapped_location.human_address" value is a string instead of an object and has to be parsed by JSON.parse()
            const address = JSON.parse(park.mapped_location.human_address).address

            // push results onto parkResults array
            parkResults.push({"name": name, "address": address})

            // displayResults(parkResults)

            console.log(`park name: ${name}\naddress: ${address}`);
        });
        // const results = selectRandomResults(parkResults, numberOfResults)

        parkFeaturesDropdown.selectedIndex = 0;
    });
};

const addEventListenerToSearchButton = () => {
    // get reference to the park features search button
    const parkSearchButton = document.querySelector("#park-search-button");

    // add an event listener to the park search button click
    parkSearchButton.addEventListener("click", handleSearch);
};
