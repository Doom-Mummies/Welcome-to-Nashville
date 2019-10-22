const handleMeetupSearch = events => {
    // console.log(event)
    const inputField = document.getElementById("input-3")
    console.log("user input", inputField.value)
  
    searchMeetups(inputField.value)
    .then(result => {
      // console.log(result)
      displayMeetupHtml(result.events)
      inputField.value = ""
    })
  
  }


  // This attaches an event listener to the search button and executes the handleMeetupSearch function upon click
const attachEventListenerToMeetupSearchButton = () => {
    const searchButton = document.querySelector("#meetups-search-button")
    searchButton.addEventListener("click", handleMeetupSearch)
  }