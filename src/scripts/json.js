const databaseURL = "http://localhost:8088"

const putUpdatedField = (field, updatedObject) =>  {
    let body = {}
    body[`${field}`] = updatedObject
    // { park: "updated stuff" }
    console.log(body)
    fetch(`${databaseURL}/itinerary/?id=1`, {
        "headers": {
            "Accept": "application/json",
        },
        "body": body,
        "method": "PUT"
    })
    .then(response => response.json())
    .then(response => console.log(response))
}