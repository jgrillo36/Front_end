function getInputValue(){
    // Selecting the input element and get its value 
    var enterButton = document.getElementById("venues").value;
   


//https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO

var api = "https://app.ticketmaster.com/discovery/v2/venues.json?keyword="

var key = "&size=1&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO"

var url = api+enterButton+key
var arr = []
document.getElementById("error").innerHTML = ""

fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
   
    let Market = data._embedded.venues[0].markets[0].id
    

    
    fetch("https://app.ticketmaster.com/discovery/v2/events?marketId=" + Market + "&size=20&apikey=6wEJrPVrGABh8jxlvochEnjvuXU3Y2kO")
    .then(response => response.json())
    .then(data => {
 
    
        console.log(data);

        let event = {};

        for(let i=0; i < data._embedded.events.length; i++){

            event.name = data._embedded.events[i].name;
            event.startDate = data._embedded.events[i].dates.start.localDate;
            event.image = data._embedded.events[i].images[0].url
            event.url = data._embedded.events[i].url;
            
            arr.push(event);
            event = {};
        }

        console.log(arr);
        displayEvents(arr);
})
    

})
.catch(error => {
    document.getElementById("error").innerHTML = "City name not found. Please try again!";
    console.log(" error! try again")
})

}

function displayEvents(eventsArray){
    let location = document.getElementById('temp')
    // purpose of function: loop through eventsArray and append events into HTML DOM
    let innerHtmlString = "";
eventsArray.forEach(event => {

    innerHtmlString += 
   
           `
           <div class="card border-2 cardshadow" style="width: 18rem; margin: 0.3em;">
           <img class="card-img-top" height=150px width=200px src="${event.image}" alt="Card image cap">
            <div class="card-body">
           <h5 class="card-title">${event.name}</h5>
           <p class="card-text">${event.startDate}</p>
             </div>
           <div class="card-footer bg-dark border-success"><a href="${event.url}" class="btn btn-dark">Buy Tickets</a></div>
           </div>
            `

})


   location.innerHTML = innerHtmlString;
   console.log(location);
   console.log(innerHtmlString);

}
