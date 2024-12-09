// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.createElement("button");
button.textContent = "Click!";
button.id = "btnToClick";

document.body.appendChild(button);

button.addEventListener("click", () => {
  console.log(event);
});

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector(".focus");
focus.addEventListener("focus", () => {
  console.log(focus.value);
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input = document.querySelector(".value");
input.addEventListener("input", () => {
  console.log(input.value);
});

// 4.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsContainer = document.createElement("ul");
document.body.appendChild(albumsContainer);

albums.forEach((album) => {
  const element = document.createElement("li");
  element.textContent = album;
  albumsContainer.appendChild(element);
});
