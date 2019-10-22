// string that enters search form into HTML
const buildAndAppendSearchForm = () => {
    const searchForm = `
    <section class="search-form">
      <h3>Search for stuff to do today: </h3>
      
      <article>
        <input type="text" placeholder="park by feature">
        <button id = "park-search-button">Search</button>
      </article>

      <article>
        <input type="text" placeholder="restaurants by food type" class="restaurantInput">
        <button id = "restaurant-search-button">Search</button>
      </article>

      <article>
        <input id="concertsGenreSearch" type="text"placeholder="meetups by topic">
        <button id = "meetups-search-button">Search</button>
      </article>

      <article>
        <input type="text" placeholder="concerts by genre">
        <button id = "concerts-search-button">Search</button>
      </article>
    </section>

    <section>
      <h3>Results</h3>
      <article class="search-results"></article>
    </section>
    `
    //make sure to put class on input tags so event can find the correct input
    console.log(searchForm)

    // inserts string into search-container div
    const searchContainerDiv = document.querySelector("#search-container")
    searchContainerDiv.innerHTML = searchForm
  }

  // reorganized input and button tags into own individual article tags for readability and spacing
