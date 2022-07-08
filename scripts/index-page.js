//comments array
const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2021",
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
    name = comments[i].name;
    date = comments[i].date;
    comment = comments[i].comment;
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
  const newDate = moment().format("L");
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
