// Create p element with red text
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "Hey I'm red!";
firstParagraph.style.color = "red";

// Append to the body
document.body.append(firstParagraph);

// Create h3 element with blue text
const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

// Append to the body
document.body.append(heading3);

// Create div container
const mainDiv = document.createElement("div");
mainDiv.style.border = "2px solid black";
mainDiv.style.backgroundColor = "pink";

// Append to the body
document.body.append(mainDiv);

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

// Append to the div
mainDiv.append(heading1);
