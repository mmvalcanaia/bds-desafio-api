import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="content-container">
        <Link to="/">
          <h1>Desafio Github API</h1>
        </Link>
        <h6>Bootcamp Spring React - DevSuperior</h6>
        <Link to="/search">
          <button className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
