const rootDiv = document.getElementById("root");

const heading = document.createElement("h1");

heading.innerText = "Welcome to Dex'N.com";

rootDiv.appendChild(heading);

const colors = ["red", "blue", "green"];

colors.forEach((c) => {
  renderButtons(c);
});

function renderButtons(color) {
  const button = document.createElement("button");
  button.innerText = color;
  button.style.backgroundColor = color;
  button.style.marginRight = "20px";

  button.addEventListener("click", () => {
    heading.style.color = color;
  });
  rootDiv.appendChild(button);
}
