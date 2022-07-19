//fetching
let b = []
let a = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=66aecd7a-f649-4fea-b60a-fc627b778ed1"
).then((res) =>{
  console.log(res.data)
  return res.data
 
})
console.log(b)

//comments array
let comments = [
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
const commentList = document.querySelector(".home__comments--list");

const commentBtn = document.getElementById("index__comment");

//adding event listener to comment button
commentBtn.addEventListener("click", addComment);

//showing comment on the page
function showComments(arr) {
  
  commentList.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    
    //creating the elements for the comment list
    //parent div for comment
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    //element for the picture
    const commentPic = document.createElement("span");
    commentPic.classList.add("comment__profile-pic");
    // parent div for comment, pic, name and date
    const commentText = document.createElement("div");
    commentText.classList.add("comment__text");
    //parent div for name and date in comment
    const commentTextTitle = document.createElement("div");
    commentTextTitle.classList.add("comment__text--title");
    // h3 for name
    const commentName = document.createElement("h3");
    // para element for  comment
    const paraElement = document.createElement("p");
    //para element for date in comment
    const dateEl = document.createElement("p");
    name = arr[i].name;
    date = arr[i].date;
    comment = arr[i].comment;
    //setting the text for name
    commentName.innerText = name;
    //setting text for comment
    paraElement.innerText = comment;
    //setting the text for date
    dateEl.innerText = date;
    //appending name
    commentTextTitle.appendChild(commentName);
    //appending date
    commentTextTitle.appendChild(dateEl);
    //appending name and date to parent element
    commentText.appendChild(commentTextTitle);
    //appending comment to parent element
    commentText.appendChild(paraElement);
    // appending profile pic to whole comment container
    commentElement.appendChild(commentPic);
    //appending comment container to whole comment container
    commentElement.appendChild(commentText);
    //appending the comment container to comment list
    commentList.appendChild(commentElement);
  }
}
showComments(comments)
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
    showComments(comments)
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
    imgUrl: "./assets/images/Photo-gallery-1.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-2.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-3.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-4.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-5.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-6.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-7.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-8.jpg",
  },
  {
    imgUrl: "./assets/images/Photo-gallery-9.jpg",
  },
];

//selecting the element
const imgGallery = document.querySelector(".gallery__images");

// show image function

for (let i = 0; i < images.length; i++) {
  //creating parent element for img
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  //creating img element
  const img = document.createElement("img");
  //getting img url from array

  //setting the src on img
  img.setAttribute("src", images[i].imgUrl);
  //appending the img to parent
  imgContainer.appendChild(img);
  //appending parent img container to gallery
  imgGallery.appendChild(imgContainer);
}
