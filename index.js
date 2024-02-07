let input = document.getElementById("inp");
let button = document.getElementById("btn");
let container = document.getElementById("dv");

let data = ["mario", "sonic", "zelda"];

let createItem = (text) => {
  let div = document.createElement("div");
  div.innerText = text;
  div.classList.add("item");
  container.append(div);
};

let render = () => {
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    createItem(data[i]);
  }
};

let click = () => {
  if (input.value === "") {
    return;
  }
  data.push(input.value);
  render();
  input.value = "";
};

button.addEventListener("click", click);
render();
