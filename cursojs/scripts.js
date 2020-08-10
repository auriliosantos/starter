/* 1º exercicio */
//function checaIdade(idade) {
// Retornar uma promise
/* return new Promise((resolve, reject) =>
    setTimeout(() => (idade > 18 ? resolve() : reject()), 2000)
  );
}
checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  }); */

/* 2º exercicio */
var inputElement = document.querySelector('input[name="user"]');
var buttonElement = document.querySelector("button");
var repoElement = document.querySelector("#repos");

var listElement = document.createElement("ul");
repoElement.appendChild(listElement);

function adicionar() {
  var usuario = inputElement.value;
  var endereco = `https://api.github.com/users/${usuario}/repos`;

  listElement.innerHTML = "";
  var loadingElement = document.createElement("li");
  var loadingText = document.createTextNode("Carregando...");
  loadingElement.appendChild(loadingText);
  listElement.appendChild(loadingElement);

  axios
    .get(endereco)
    .then(function (response) {
      listElement.innerHTML = "";
      for (const item of response.data) {
        var listItemElement = document.createElement("li");
        var textElement = document.createTextNode(item.name);

        listItemElement.appendChild(textElement);
        listElement.appendChild(listItemElement);
      }
    })
    .catch(function (error) {
      listElement.innerHTML = "";
      error == "Error: Request failed with status code 404"
        ? alert("Usuário não existe")
        : alert(error);
    });

  inputElement.value = "";
}

/* 3º exercicio */
