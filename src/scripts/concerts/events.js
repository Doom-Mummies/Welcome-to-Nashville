/* Put this whole section in the "displayGenraSearch" function and called said function in the main.js file at the end of index.html to ensure everything has been initialized. */ 


function displayGenreSearch() {
    // Reference the search button for the concerts section...
    const concertsSearchButton = document.getElementById("concerts-search-button") 
    
    // ...and add an event listener to it that runs a function...
    concertsSearchButton.addEventListener("click", () => {
        // ...which takes the value entered into the search box...
        const concertsGenreSearchBox = document.querySelector("#concertsGenreSearch")
        searchTicketMaster(concertsGenreSearchBox.value) //and puts that value into the argument of the searchTicketMaster function, which then runs that function (in my concerts folder api.js)
})
}