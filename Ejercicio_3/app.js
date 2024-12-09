// 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const countriesContainer = document.createElement("ul");

countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  countriesContainer.appendChild(li);
});

document.body.appendChild(countriesContainer);

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

const toRemove = document.querySelector(".fn-remove-me");

toRemove.remove();

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const carsContainer = document.createElement("ul");
const printHereDiv = document.querySelector(`[data-function="printHere"]`);

cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  carsContainer.appendChild(li);
});

printHereDiv.appendChild(carsContainer);

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const randomImgs = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

/* randomImgs.forEach((object) => {
  const containers = document.createElement("div");
  const titles = document.createElement("h4");
  const imgs = document.createElement("img");

  titles.textContent = object.title;
  containers.appendChild(titles);

  imgs.src = object.imgUrl;
  imgs.alt = "Random Alt";
  containers.appendChild(imgs);

  document.body.appendChild(containers);
});
 */
// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

/* const renderImages = () => {
  const container = document.getElementById("imgs-container");
  container.innerHTML = "";

  randomImgs.forEach((object) => {
    const containers = document.createElement("div");
    const titles = document.createElement("h4");
    const imgs = document.createElement("img");

    titles.textContent = object.title;
    containers.appendChild(titles);

    imgs.src = object.imgUrl;
    imgs.alt = "Random Alt";
    containers.appendChild(imgs);

    container.appendChild(containers);
  });
};

const imgsContainer = document.createElement("div");
imgsContainer.id = "imgs-container";
document.body.appendChild(imgsContainer);

renderImages();

const divRemover = document.createElement("button");
divRemover.textContent = "Remove!";
document.body.appendChild(divRemover);

divRemover.addEventListener("click", () => {
  if (randomImgs.length > 0) {
    randomImgs.pop();
    renderImages();
  } else {
    alert("No more elements to remove!");
  }
}); */

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

randomImgs.forEach((object) => {
  const containers = document.createElement("div");
  const titles = document.createElement("h4");
  const imgs = document.createElement("img");
  const remover = document.createElement("button");

  titles.textContent = object.title;
  containers.appendChild(titles);

  imgs.src = object.imgUrl;
  imgs.alt = "Random Alt";
  containers.appendChild(imgs);

  remover.textContent = "Remove!";
  containers.appendChild(remover);

  document.body.appendChild(containers);

  remover.addEventListener("click", () => {
    containers.remove();
  })

});

