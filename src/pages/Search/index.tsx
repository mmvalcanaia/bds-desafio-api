import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';
import axios from 'axios';

type FormData = {
  userName: string;
};

type GitUser = {
  avatar_url: string;
  name: string;
  url: string;
  location: string;
  followers: number;
};

const Search = () => {
  const [formData, setFormData] = useState<FormData>({ userName: '' });
  const [gitUser, setGitUser] = useState<GitUser>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name] : value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.userName}`)
      .then((response) => {
        setGitUser(response.data);
      })
      .catch((error) => {
        setGitUser(undefined); //se acontecer algum erro na requisição, não mostra o CardResult
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <div className="search-container light-blue-card">
        <h4>Encontre um perfil Github</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            placeholder="Usuário Github"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Encontrar
          </button>
        </form>
      </div>
      {gitUser && (
        <ResultCard
          avatar_url={gitUser.avatar_url}
          url={gitUser.url}
          name={gitUser.name}
          location={gitUser.location}
          followers={gitUser.followers}
        />
      )}
    </div>
  );
};

export default Search;
