// bottom border styling for navigation
const navLinks = document.getElementById("navLinks");
if (window.document.title === "Bandsite - Shows") {
  navLinks.lastChild.previousSibling.classList.add("active");
} else {
  navLinks.lastChild.previousSibling.classList.remove("active");
}

//selecting DOM elements

const showsMob = document.querySelector(".shows__list");
const showsTabDesk = document.querySelector(".table__info");

//shows array
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key='36a96cd1-9ffa-453b-bae6-80d209e81e41'"
  )
  .then((res) => {
    displayShows(res.data);
    showListTab(res.data);
  });


//showing shows on the mobile view function
function displayShows(shows){


for (let i = 0; i < shows.length; i++) {
  //whole show container
  const showContainer = document.createElement("div");
  showContainer.classList.add("shows__show");
  showContainer.setAttribute('id', shows[i].id)
  //container for date label and date
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date");
  //date text label
  const dateLabel = document.createElement("p");
  //show date
  const dateText = document.createElement("p");
  //container for venue label and venue
  const venueContainer = document.createElement("div");
  venueContainer.classList.add("venue");
  //venue text label
  const venueLabel = document.createElement("p");
  //show venue
  const venueText = document.createElement("p");
  //container for location label and location
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location");
  //location text label
  const locationLabel = document.createElement("p");
  //show location
  const locationText = document.createElement("p");
  //buy tickets button
  const button = document.createElement("button");
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.innerText = "BUY TICKETS";
  //appending anchor into button
  button.appendChild(a);
  //text labels
  dateLabel.innerText = "DATE";
  venueLabel.innerText = "VENUE";
  locationLabel.innerText = "LOCATION";
  //setting text for date venue location
  timestamp = shows[i].date / 1000  // (divided by thousand to convert it to seconds)
  dateText.innerText = moment.unix(timestamp).format("MMM DD YYYY")
  venueText.innerText = shows[i].place;
  locationText.innerText = shows[i].location;
  //appending date label, and show date
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(dateText);
  //appending venue label, and show venue
  venueContainer.appendChild(venueLabel);
  venueContainer.appendChild(venueText);
//appending location label, and show location
  locationContainer.appendChild(locationLabel);
  locationContainer.appendChild(locationText);
//appending date, venue, and location containers to whole show container
  showContainer.appendChild(dateContainer);
  showContainer.appendChild(venueContainer);
  showContainer.appendChild(locationContainer);
//appending button to whole show container
  showContainer.appendChild(button);
  //appending whole show container to show list
  showsMob.appendChild(showContainer);

}
}

// showing shows on tablet and desktop views function

function showListTab(shows) {
//   let newShowTab = "";
   for (let i = 0; i < shows.length; i++) {
     //tr element for the table
     const tableRow = document.createElement('tr')
     //td element for date 
     const tdDate = document.createElement('td')
     //td for venue
     const tdVenue = document.createElement('td')
     //td for location
     const tdLocation = document.createElement('td')
     //buy tickets button
     const button = document.createElement('button')
     const a = document.createElement('a')
     a.setAttribute('href', "#")
     button.innerText = "BUY TICKETS"
     button.appendChild(a)
     //setting innertext for td elements
     timestamp = shows[i].date / 1000; // (divided by thousand to convert it to seconds)
     tdDate.innerText = moment.unix(timestamp).format("MMM DD YYYY");
     tdVenue.innerText = shows[i].place;
     tdLocation.innerText = shows[i].location;

    //  tdDate.innerText = shows[i].date;
    //  tdVenue.innerText = shows[i].venue;
    //  tdLocation.innerText = shows[i].showLocation;
     //appending td elements to tr element
     tableRow.appendChild(tdDate)
     tableRow.appendChild(tdVenue)
     tableRow.appendChild(tdLocation)
     tableRow.appendChild(button)
     //appending the tr element to show list on tablet mode and desktop mode
     showsTabDesk.appendChild(tableRow)

   }
  }

