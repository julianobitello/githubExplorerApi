import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Issues ,Header, RepositoryInfo } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

function User() {
  const { name, repo } = useParams();
  const [user, setUser] = useState([]);
  const [issues, setIssues] = useState([]);

  async function loadUserInformation() {
    const response = await api.get(`/repos/${name}/${repo}`);
    const outerResponse = await api.get(`/repos/${name}/${repo}/issues`);
    setUser(response.data);
    setIssues(outerResponse.data);
  }

  useEffect(() => {
    loadUserInformation();
  }, [name]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Rocket Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src={user?.owner?.avatar_url} alt={user?.owner?.login} />
          <div>
            <strong>{user.full_name}</strong>
            <p>{user.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{user.stargazers_count}</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>{user.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{user.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default User;
