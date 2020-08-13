import axios from "axios";

class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Repositório não existe");
      });
  }
}

Github.getRepositories("rocketseat/unform");
Github.getRepositories("rocketseat/dslkvmskv");

//usando async await

class Github2 {
  static async getRepositories(repo) {
    try {
      const { data } = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(data);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}

Github2.getRepositories("rocketseat/unform");
Github2.getRepositories("rocketseat/dslkvmskv");
