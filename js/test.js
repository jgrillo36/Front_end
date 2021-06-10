let searchButton = document.querySelector('#button-addon2');

searchButton.addEventListener('click', getInputValue);


console.log(searchButton)

function getInputValue() {
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("events").value;
    var arr = []

    console.log('made it')

    // https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO
    var api = "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
    var key = "&size=50&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"
    var url = api + enterButton + key

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let event = {};
            for (let i = 0; i < data._embedded.events.length; i++) {
                event.events = data._embedded.events[i].name
                event.events2 = data._embedded.events[i].dates.start.localDate
                event.events3 = data._embedded.events[i].images[0].url
                event.events4 = data._embedded.events[i].url
                arr.push(event);
                event = {};
            }
            
            console.log(arr);
            displayEvents(arr)

            let div = document.getElementById("temp")
            let div2 = document.getElementById("temp2")
            let div3 = document.getElementById("temp3")
        })
        
    function displayEvents(eventsArr) {
        var location = document.getElementById("temp")
        let innerHtmlString = ""
        eventsArr.forEach(element => {
            innerHtmlString += `<div class="card border-dark cardshadow"  style="width: 18rem; margin: 0.3em;">
            <img class="card-img-top" height=150px width=200px src="${element.events3}" alt="Card image cap">
             <div class="card-body">
            <h5 class="card-title">${element.events}</h5>
            <p class="card-text">${element.events2}</p>
              </div>
            <div class="card-footer bg-dark border-success"><a href="${element.events4}" class="btn btn-dark" style="background-color: dark">Buy Tickets</a></div>
            </div>`
        });
        
        location.innerHTML = innerHtmlString;
    }
}

