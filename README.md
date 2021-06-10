Mooove




Overview:

Mooove allows concert goers to search entertainment and sport events anywhere in the United States, or wherever ticketmaster sells the tickets. Users can search by
city, by specific venue, or even by a particular performer they are interested in. The web application will then populate the site will all the upcoming events,
showing the name of the event, picture, date and a link to ticketmaster.com website where they can purchase the tickets. In the future, we woul like to implement
a maping function where users can find events by looking at the map.



The Team:

Bogdan Blach
Primary Team Roles: API, JavaScript writer, prototype/design
Contributions: Implemented nested API calls for by Venues and by City searches. Wrote JavaScript, HTML and applied CSS for both websites.

Jennifer Grillo
Primary Team Roles: API, JavaScript writer, prototype/design
Contributions: Implemented API call for the by Performer search function. Wrote JavaScript, HTML and applied CSS to that site.

Lane Reynolds
Primary Team Roles: JavaScript writer, prototype/design
Contributions: Created "About Us' page using HTML and CSS. Help with the API implementation.

Lorenzo Williams
Primary Team Roles: API, JavaScript writer, prototype/design
Contributions: Built and designed the "Home Page" site using HTML and CSS.



What we used:

Languages:
HTML5
CSS3
JavaScript ES6


APIs:
Ticketmaster API - https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#find-suggest-10-v2

Other:
AJAX
JSON


MVP (Minimum Viable Product):
- Event card gellery displaying relevant events for specific search type
- Displays all upcoming events for specific search type
- Button that links an event card to ticketmaster website where you can purchase the tickets
- Responsive design


Stretch Goals Future:
- Implement a search function based on map/geo location
- Add reset function after each search result
- Link random AIP call results into the home page images


Challenge:
 - specifying the API search by Venue and City; could not pull any information
 Solution:
 - used a nested API fetch calls based on venueID and marketID: first call pulled the venueID, and then the second call used that id to find the specific result
 


