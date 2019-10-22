function displayGenreSearch() {
    const concertsSearchButton = document.getElementById("concerts-search-button")
    
    concertsSearchButton.addEventListener("click", () => {
        const concertsGenreSearchBox = document.querySelector("#concertsGenreSearch")
        console.log(concertsGenreSearchBox.value)
})
}