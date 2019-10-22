const buildAndAppenditineraryForm = () => {
    const itineraryForm = `
    <section class="saved-itinerary">
        <h3>My Itinerary </h3>

        <article>
            <span>Park:</span>
            <span class = "park-itinerary"></span>
        </article>

        <article>
            <span>Restaurant:</span>
            <span class = "restaurant-itinerary"></span>
        </article>

        <article>
            <span>Meetup:</span>
            <span class = "meetup-itinerary"></span>
        </article>

        <article>
            <span>Concert:</span>
            <span class = "concert-itinerary"></span>
        </article>
      
    </section>
    `
    //make sure to put class on input tags so event can find the correct input
    console.log(itineraryForm)
  
    // inserts string into itinerary-container div
    const itineraryContainerDiv = document.querySelector("#iterary-container")
    itineraryContainerDiv.innerHTML = itineraryForm
  }

  const saveMeetupToItineraryButton = () => {
    const meetupSaveButton = document.querySelectorAll("#meetups-save-button")
    for (let i = 0; i < meetupSaveButton.length; i++) {
        meetupSaveButton.item(i).addEventListener("click", addMeetupToItinerary)
    }
  }

  const addMeetupToItinerary = () => {

  }
  

  
