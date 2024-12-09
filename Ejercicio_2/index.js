// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const insertDiv = document.createElement("div");
document.body.appendChild(insertDiv);



// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithP = document.createElement("div");
divWithP.innerHTML = `<p>Paragraph</p>`;
document.body.appendChild(divWithP);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divWithLoop = document.createElement("div");
for (let i = 1; i <= 6; i++) {
    const newP = document.createElement("p");
    newP.innerText = `Paragraph Nº${i}`
    divWithLoop.appendChild(newP);
}
document.body.appendChild(divWithLoop);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p = document.createElement("p");
p.innerText = `Soy dinámico!`;
document.body.appendChild(p);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.innerText = `Wubba Lubba dub dub`;


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const appsContainer = document.createElement("ul");
apps.forEach(app => {
    const li = document.createElement("li");
    li.innerText = app;
    appsContainer.appendChild(li);
})
document.body.appendChild(appsContainer)


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const toRemove = document.querySelectorAll(".fn-remove-me");
toRemove.forEach(element => {
    element.remove();
}); 


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const firstDiv = document.querySelectorAll(".fn-insert-here")[1];
firstDiv.insertAdjacentHTML("afterend","<p>Voy en medio!</p>");


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insideInsert = document.querySelectorAll("div.fn-insert-here");
insideInsert.forEach(element => {
    element.innerText = `Voy dentro!`;
})

