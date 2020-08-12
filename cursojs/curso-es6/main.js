// 3.1
const arr = [1, 2, 3, 4, 5];

const traditional1 = arr.map(function (item) {
  return item + 10;
});

const arrow1 = arr.map((item) => item + 10);

console.log(traditional1);
console.log(arrow1);
console.log("---------");

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

const traditional2 = mostraIdade(usuario);

const arrow2 = (usuario) => usuario.idade;

console.log(traditional2);
console.log(arrow2(usuario));
console.log("---------");

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = "Diego", idade = 18) {
  return { nome, idade };
}

const tradicional31 = mostraUsuario(nome, idade);
const tradicional32 = mostraUsuario(nome);

const arrow3 = (nome = "Diego", idade = 18) => ({ nome, idade });

const arrow31 = arrow3(nome, idade);
const arrow32 = arrow3(nome);

console.log(tradicional31);
console.log(tradicional32);
console.log(arrow31);
console.log(arrow32);
console.log("---------");

// 3.4
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

const arrowPromise = () => new Promise((resolve, reject) => resolve());
