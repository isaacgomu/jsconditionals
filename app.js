console.log("Conditionals fun!");

if (5 > 3) {
  console.log("5 is more than 3");
}

if (3 < 1) {
  console.log("3 is less than 1");
}

let myAge = 21;

if (myAge === 21) {
  console.log("Good job being this old");
} else {
  console.log("Bad age");
}

// "myAge === 21" means value and type. "myAge == 21" means value.
// so if I had "let myAge = "21"", the 21 would be a string, and therefore "if (myAge == 21)" would work but "if (myAge === 21)" wouldnt, as it is a string not a number.

let themeAnswer = prompt("Do you prefer light or dark theme?");

if (themeAnswer === "light") {
  document.body.style.backgroundColor = "#ffffff";
} else if (themeAnswer === "dark") {
  document.body.style.backgroundColor = "#000000";
} else {
  document.body.style.backgroundColor = "red";
}

let age = 17;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  } else if (movieRating === "U") {
    console.log("You can watch the movie!");
  } else if (movieRating === "12") {
    console.log("You can watch the movie!");
  } else if (movieRating === "15") {
    console.log("You can watch the movie!");
  } else if (movieRating === "18") {
    console.log("You cannot watch the movie!");
  }
} else if (age < 8) {
  if (movieRating === "U") {
    console.log("You can watch the movie!");
  } else {
    console.log("You cannot watch the movie!");
  }
}
