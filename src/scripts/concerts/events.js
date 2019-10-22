function displayGenreSearch() {
    const concertsSearchButton = document.getElementById("concerts-search-button")
    const concertsGenreSearchBox = document.getElementById("concertsGenreSearch")

    concertsSearchButton.addEventListener("click", () => {
        console.log(concertsGenreSearchBox.event.target.value)
})

}