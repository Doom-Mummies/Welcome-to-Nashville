/* Put this whole section in a function and referenced that in the main.js file at the end of index.html to ensure everything has been initialized. */ 


function displayGenreSearch() {
    // Reference the search button for the concerts section...
    const concertsSearchButton = document.getElementById("concerts-search-button") 
    
    // ...and add an event listener to it that runs a function...
    concertsSearchButton.addEventListener("click", () => {
        // ...which takes references the search box and (currently) simply console logs the value that is entered into it
        const concertsGenreSearchBox = document.querySelector("#concertsGenreSearch")
        console.log(concertsGenreSearchBox.value)
})
}