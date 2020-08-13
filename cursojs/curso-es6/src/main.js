import axios from "axios";

const buscaUsuario = (usuario) => {
  axios
    .get(`https://api.github.com/users/${usuario}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Usuário não existe");
    });
};

buscaUsuario("diego3g");

//usando async await

const buscaUsuario2 = async (usuario) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};

buscaUsuario2("diego3g");
