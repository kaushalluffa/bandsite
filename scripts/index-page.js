//comments array
const comments = [
  {
    name: "Connor Walton",
    date: moment("20210217", "YYYYMMDD").fromNow(),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: moment("20210901", "YYYYMMDD").fromNow(),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: moment("20211221", "YYYYMMDD").fromNow(),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

//selecting dom elements
const commentElement = document.querySelector(".home__comments--list");

const commentBtn = document.getElementById("index__comment");

//adding event listener to comment button
commentBtn.addEventListener("click", addComment);

//showing comment on the page function
function showComments(arr) {
  let newComment = "";
  for (let i = 0; i < arr.length; i++) {
    name = arr[i].name;
    date = arr[i].date;
    comment = arr[i].comment;
    newComment +=
      "<div class='comment'><div class='comment__profile-pic'></div><div class='comment__text'><div class='comment__text--title'><h3>" +
      name +
      "</h3><p>" +
      date +
      "</p></div><p>" +
      comment +
      "</p></div></div>";
  }
  return newComment;
}
//appending comments on the page from the array
commentElement.innerHTML = showComments(comments);

//adding a comment function
function addComment(e) {
  e.preventDefault();

  const inputName = document.getElementById("name");
  const inputComment = document.getElementById("comment");
  const newDate = moment().fromNow();
  //if check to see if the values are empty so empty comments can be avoided
  if (inputName.value === "" && inputComment.value === "") {
    alert("Please enter name and comment");
  } else {
    const newComment = {
      name: inputName.value,
      date: newDate,
      comment: inputComment.value,
    };
    //adding new comment object to the array
    comments.unshift(newComment);
    //re rendering the comments on the page with new array of comments
    commentElement.innerHTML = showComments(comments);
    //resetting the input fields
    inputName.value = "";
    inputComment.value = "";
  }
}

// bottom border styling for navigation

const navLinks = document.getElementById("navLinks");
if (window.document.title === "Bandsite - Biography") {
  navLinks.firstChild.nextSibling.classList.add("active");
} else {
  navLinks.firstChild.nextSibling.classList.remove("active");
}

//Extra stuff not in the requirements of the project by Brainstation

// images array

const images = [
  {
    imgUrl: "https://photos.app.goo.gl/bBTSrimtnNiERXtU8",
  },
  {
    imgUrl: "https://photos.app.goo.gl/eCKbmaAAKzzYZxWw9",
  },
  {
    imgUrl: "https://photos.app.goo.gl/FeT6uyntM9Dc2qQr7",
  },
  {
    imgUrl: "https://photos.app.goo.gl/CNRMdrTGkeiDAA5HA",
  },
  {
    imgUrl: "https://photos.app.goo.gl/FNnA9MiRRvSrsJhR9",
  },
  {
    imgUrl: "https://photos.app.goo.gl/g8epph23Y5i9UKcZA",
  },
  {
    imgUrl: "https://photos.app.goo.gl/74uURfqma6HmDtAr9",
  },
  {
    imgUrl: "https://photos.app.goo.gl/kWPoAU4pwzx4RtUb7",
  },
  {
    imgUrl: "https://photos.app.goo.gl/vekqs312gDZ6t6oK7",
  },
];

//selecting the element
const img = document.querySelector(".gallery__images");

// show image function
function showImages(arr) {
  let newImage = "";
  for (let i = 0; i < arr.length; i++) {
    imgUrl = arr[i].imgUrl;
    newImage += `<div class='img-container'><img src="${imgUrl}" alt='gallery image'/></div>`;
  }
  return newImage;
}

// adding images to DOM
img.innerHTML = showImages(images);
