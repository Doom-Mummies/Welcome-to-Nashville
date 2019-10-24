// number of results to display
const numberOfResults = 4;

// function definition to select random results from the array
const selectRandomResults = (arrayOfResults, numberOfResultsToReturn) => {
    // set up empty indexes and results arrays
    const indexes = [];
    const results = [];

    // if length of results array is less that number of results to return, then just return the array
    if (arrayOfResults.length <= numberOfResultsToReturn) {
        return arrayOfResults;
    }

    // while the number of indexes is less than the amount of results needed to return
    while (indexes.length < numberOfResultsToReturn) {
        // get a random number to use as an arrayOfResults index
        const number = Math.floor(Math.random() * arrayOfResults.length);
        // check to see if the index already exists on the array and push if it doesn't
        if (!indexes.includes(number, 0)) {
            indexes.push(number);
        }
    }

    // for each random index pushed to the array
    indexes.forEach(index => {
        // push results matching index from old arrayOfResults to new results array
        results.push(arrayOfResults[index]);
    });

    // ship it
    return results;
};

// function definition for handling search on button click
const handleParkSearch = () => {
    // get a reference to the dropdown element
    const parkFeaturesDropdown = document.querySelector(
        "#park-features-dropdown"
    );

    // only do the fetch call if there is a value selected
    if (parkFeaturesDropdown.value) {
        // function call to fetch the data based on the value from the dropdown
        searchParksForFeatures(parkFeaturesDropdown.value).then(response => {
            const parkResults = [];
            // loop through each park object to capture name and address
            response.forEach(park => {
                // set park name
                const name = park.park_name;
                // set address. The "park.mapped_location.human_address" value is a string instead of an object and has to be parsed by JSON.parse()
                const address = JSON.parse(park.mapped_location.human_address)
                    .address;

                // push name and address of results onto parkResults array
                parkResults.push({ name: name, address: address });
            });

            // function call to pull a set amount of random results from the response 
            const results = selectRandomResults(parkResults, numberOfResults);

            // function call to display the results in the result section
            displayParkHtml(results)
            
            // reset the dropdown
            parkFeaturesDropdown.selectedIndex = 0;
        });
    }
};

// function definition to add the event listener to the park search button
const addEventListenerToSearchButton = () => {
    // get reference to the park features search button
    const parkSearchButton = document.querySelector("#park-search-button");

    // add an event listener to the park search button click
    parkSearchButton.addEventListener("click", handleParkSearch);
};
