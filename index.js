const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const liElements = document.querySelectorAll(".lista li");
  const listaElement = document.querySelector(".lista");

  liElements.forEach((liEl) => {
    listaElement.removeChild(liEl);
  });

  // Alternative way
  // liElements.forEach((liEl) => {
  //   liEl.remove();
  // });

  cosasQueAprendimos.forEach((arrayEl) => {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = arrayEl.tema;
    if (arrayEl.class) {
      newLiEl.classList.add(arrayEl.class);
    }
    listaElement.appendChild(newLiEl);
  });
}

main();
