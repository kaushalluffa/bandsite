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

const shows = [
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2022",
    venue: "Pier 3 East",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2022",
    venue: "View Lounge",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2022",
    venue: "Hyatt Agency",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2022",
    venue: "Moscow Center",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2022",
    venue: "Press Club",
    showLocation: "San Francisco, CA",
  },
];

//showing shows on the mobile view function

for (let i = 0; i < shows.length; i++) {
  //whole show container
  const showContainer = document.createElement("div");
  showContainer.classList.add("shows__show");
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
  dateText.innerText = shows[i].date;
  venueText.innerText = shows[i].venue;
  locationText.innerText = shows[i].showLocation;
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


// showing shows on tablet and desktop views function

// function showListTab(arr) {
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
     tdDate.innerText = shows[i].date;
     tdVenue.innerText = shows[i].venue;
     tdLocation.innerText = shows[i].showLocation;
     //appending td elements to tr element
     tableRow.appendChild(tdDate)
     tableRow.appendChild(tdVenue)
     tableRow.appendChild(tdLocation)
     tableRow.appendChild(button)
     //appending the tr element to show list on tablet mode and desktop mode
     showsTabDesk.appendChild(tableRow)

   }

