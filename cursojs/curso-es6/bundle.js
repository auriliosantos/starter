"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
var traditional1 = arr.map(function (item) {
  return item + 10;
});
var arrow1 = arr.map(function (item) {
  return item + 10;
});
console.log(traditional1);
console.log(arrow1);
console.log("---------"); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: "Diego",
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

var traditional2 = mostraIdade(usuario);

var arrow2 = function arrow2(usuario) {
  return usuario.idade;
};

console.log(traditional2);
console.log(arrow2(usuario));
console.log("---------"); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

var tradicional31 = mostraUsuario(nome, idade);
var tradicional32 = mostraUsuario(nome);

var arrow3 = function arrow3() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

var arrow31 = arrow3(nome, idade);
var arrow32 = arrow3(nome);
console.log(tradicional31);
console.log(tradicional32);
console.log(arrow31);
console.log(arrow32);
console.log("---------"); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var arrowPromise = function arrowPromise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
