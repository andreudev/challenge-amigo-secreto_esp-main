// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const amigoInput = document.getElementById("amigo");
const amigosListaElement = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  if (typeof amigoInput.value === "string" && amigoInput.value.trim() !== "") {
    listaAmigos.push(amigoInput.value.trim());
    amigoInput.value = "";
    mostrarAmigos();
  } else {
    alert("Por favor, ingresa un nombre");
  }
}

function mostrarAmigos() {
  amigosListaElement.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    amigosListaElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos un amigo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  amigosListaElement.innerHTML = "";
  resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
