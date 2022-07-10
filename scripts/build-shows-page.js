const navLinks = document.getElementById("navLinks");
if (window.document.title === "Bandsite - Shows") {
  navLinks.lastChild.previousSibling.classList.add("active");
} else {
  navLinks.lastChild.previousSibling.classList.remove("active");
}

const shows = [
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2022",
    venue: "Ronald Lane",
    showLocation: "San Francisco, CA",
  },
];

const showsMob = document.querySelector(".shows__list");
const showsTab = document.querySelector(".info");

//showing comment on the page function
function showList(arr) {
  let newShow = "";
  for (let i = 0; i < arr.length; i++) {
    date = arr[i].date;
    venue = arr[i].venue;
    showLocation = arr[i].showLocation;
    newShow +=
      "<div class='shows__show'><div class='date'><p>DATE</p><p>" +
      date +
      "</p></div><div class='venue'><p>VENUE</p><p>" +
      venue +
      "</p></div><div class='location'><p>LOCATION</p><p>" +
      showLocation +
      "</p></div><button><a href='#'>BUY TICKETS</a></button></div>";
  }
  return newShow;
}
function showListTab(arr) {
  let newShowTab = "";
  for (let i = 0; i < arr.length; i++) {
    date = arr[i].date;
    venue = arr[i].venue;
    showLocation = arr[i].showLocation;
    newShowTab +=
      "<tr><td>" +
      date +
      "</td><td>" +
      venue +
      "</td><td>" +
      showLocation +
      "</td><td><button><a href='#'>BUY TICKETS</a></button></td></tr>";
  }
  return newShowTab;
}
//appending comments on the page from the array
showsMob.innerHTML = showList(shows);
showsTab.innerHTML = showListTab(shows);
