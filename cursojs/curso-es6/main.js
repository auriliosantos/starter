const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//map
const idade = usuarios.map((object) => object.idade);
//filter
const filtered = usuarios.filter(
  ({ idade, empresa }) => idade > 18 && empresa === "Rocketseat"
);
//find
const found = usuarios.find(({ empresa }) => empresa === "Google");
//várias operações
const multipleOperations = usuarios
  .map((usuario) => {
    usuario.idade *= 2;
    return usuario;
  })
  .filter(({ idade }) => idade < 50);

console.log(idade);
console.log(filtered);
console.log(found);
console.log(multipleOperations);
