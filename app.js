// Question 1
// const containerID = document.getElementById("container");
// console.log(containerID);

// Question 2
// const containerID = document.querySelector("#container");
// console.log(containerID);

// Question 3
// const liSeconds = document.querySelectorAll("li.second");
// console.log(liSeconds);

// Question 4
// const olThird = document.querySelector("ol .third");
// console.log(olThird);

// Question 5
// const containerID = document.querySelector("#container");
// containerID.innerText = "Hello";

// Question 6
// let divFooter = document.querySelector(".footer");
// divFooter.classList.add("main");
// console.log(divFooter);

// Question 7
// let divFooter = document.querySelector(".footer");
// divFooter.classList.add("main");
// divFooter.classList.remove("main");
// console.log(divFooter);

// Question 8,9,10
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "Four";
ul.append(newLi);
// console.log(ul);

// Question 11

const listItems = document.querySelectorAll("ol li");
console.log(listItems);

for (let listItem of listItems) {
  listItem.style.backgroundColor = "green";
}

// Question 12
let footerDiv = document.querySelector(".footer");
footerDiv.remove();
