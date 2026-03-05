// buttons node list
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
