import Logo from "../../img/Logo.png";
import { Form, Title, Repositories } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [repositories, setRepositories] = useState([]);
  const [values, setValues] = useState("");

  async function handleButton(e) {
    e.preventDefault();
    const response = await api.get(`/users/${values}/repos`);
    setRepositories(response.data);
  }


  return (
    <>
      <img src={Logo} alt="Rocket Logo" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input
          placeholder="Digite o nome do repositório"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button type="submit" onClick={handleButton}>
          Pesquisar
        </button>
      </Form>

      {repositories.map((repository) => (
        <Link key={repository.id} to={`/user/${repository.owner.login}/${repository.name}`}>
          <Repositories>
            <img src={repository.owner.avatar_url} alt={repository.name} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Repositories>
        </Link>
      ))}
    </>
  );
}

export default Home;
