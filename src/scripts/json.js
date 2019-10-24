const databaseURL = "http://localhost:8088"

const putUpdatedField = (field, updatedObject) =>  {

    fetch(`${databaseURL}/itinerary/?id=1`)
    .then(response => response.json())
    .then(response => {
        response[`${field}`] = updatedObject

        fetch(`${databaseURL}/itinerary/?id=1`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
            method: "PUT"
        })
        .then(response => response.json())
        .then(response => console.log(response))
    })
    
    // fetch(`${databaseURL}/itinerary/?id=1`, {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //     method: "PUT"
    // })
    // .then(response => response.json())
    // .then(response => console.log(response))
}