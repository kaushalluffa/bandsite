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
const apiKey = "369c4392-b8bb-40cb-bed7-dd727b66245a";
const apiUrl = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;
function getShows(url) {
  axios.get(apiUrl).then((res) => {
    displayShows(res.data);
    showListTab(res.data);
  });
}
getShows(apiUrl);

//function takes el name and child array to append multiple child
function showElements(element, arr) {
  for (let i = 0; i < arr.length; i++) {
    element.appendChild(arr[i]);
  }
}
//showElements(showContainer, [dateContainer,dateLabel,dateText])

// function takes var name array and val name array to set the innertext of var
function setValue(varArr, valArr) {
  for (let i = 0; i < varArr.length; i++) {
    varArr[i].innerText = valArr[i]
  }
}
//showing shows on the mobile view function
function displayShows(shows) {
  for (let i = 0; i < shows.length; i++) {
    //whole show container
    const showContainer = document.createElement("div");
    showContainer.classList.add("shows__show");
    showContainer.setAttribute("id", shows[i].id);
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
    //setting text for date venue location
    timestamp = shows[i].date / 1000; // (divided by thousand to convert it to seconds)
    setValue(
      [dateLabel, venueLabel, locationLabel, dateText, venueText, locationText],
      [
        "DATE",
        "VENUE",
        "LOCATION",
        moment.unix(timestamp).format("MMM DD YYYY"),
        shows[i].place,
        shows[i].location,
      ]
    );
    //appending date label, and show date
    showElements(dateContainer, [dateLabel, dateText]);
    //appending venue label, and show venue
    showElements(venueContainer, [venueLabel, venueText]);
    //appending location label, and show location
    showElements(locationContainer, [locationLabel, locationText]);
    //appending date, venue, and location containers to whole show container
    showElements(showContainer, [
      dateContainer,
      venueContainer,
      locationContainer,
    ]);
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
    const tableRow = document.createElement("tr");
    //td element for date
    const tdDate = document.createElement("td");
    //td for venue
    const tdVenue = document.createElement("td");
    //td for location
    const tdLocation = document.createElement("td");
    //buy tickets button
    const button = document.createElement("button");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    button.innerText = "BUY TICKETS";
    button.appendChild(a);
    //setting innertext for td elements
    timestamp = shows[i].date / 1000; // (divided by thousand to convert it to seconds)
    setValue(
      [tdDate, tdVenue, tdLocation],
      [
        moment.unix(timestamp).format("MMM DD YYYY"),
        shows[i].place,
        shows[i].location,
      ]
    );
    //appending td elements to tr element
    showElements(tableRow, [tdDate, tdVenue, tdLocation, button]);
    //appending the tr element to show list on tablet mode and desktop mode
    showsTabDesk.appendChild(tableRow);
  }
}

