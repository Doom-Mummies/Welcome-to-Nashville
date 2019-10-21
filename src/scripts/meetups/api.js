    const searchMeetups = userInput => fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(result => result.json())
    .then(results => console.log(results));



    const handleMeetupSearch = event => {
        // console.log(event)
        const inputField = document.querySelector("#results-container")
        console.log("user input", inputField.value)
      
        searchMeetups(inputField.value)
        .then(results => {
          // console.log(response.events)
          displayMeetupHtml(results.events)
          inputField.value = ""
        })
      }
      
      const attachEventListenerToSearchButton = () => {
        const searchButton = document.getElementById("meetups-search-button")
        searchButton.addEventListener("click", handleSearch)
      }



    const buildMeetupHtml = meetup => `
<section>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</section>
`


const displayRecipeHtml = allRecipes => {
  let recipeResultsHtml = ""
  allRecipes.forEach(recipe => {
    let recipeHtml = buildRecipeHtml(recipe)
    recipeResultsHtml += recipeHtml
  });

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = recipeResultsHtml
}