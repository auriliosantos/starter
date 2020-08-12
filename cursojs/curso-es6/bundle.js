"use strict";

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}]; //map

var idade = usuarios.map(function (object) {
  return object.idade;
}); //filter

var filtered = usuarios.filter(function (_ref) {
  var idade = _ref.idade,
      empresa = _ref.empresa;
  return idade > 18 && empresa === "Rocketseat";
}); //find

var found = usuarios.find(function (_ref2) {
  var empresa = _ref2.empresa;
  return empresa === "Google";
}); //várias operações

var multipleOperations = usuarios.map(function (usuario) {
  usuario.idade *= 2;
  return usuario;
}).filter(function (_ref3) {
  var idade = _ref3.idade;
  return idade < 50;
});
console.log(idade);
console.log(filtered);
console.log(found);
console.log(multipleOperations);
