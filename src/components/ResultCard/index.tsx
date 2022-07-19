import './styles.css';

type Props = {
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: number;
};

const ResultCard = ({ avatar_url, url, name, location, followers }: Props) => {
  return (
    <div className="result-container light-grey-card ">
      <div className="image-container">
        <img src={avatar_url} alt="" />
      </div>
      <div className="info-container">
        <h4>Informações</h4>

        <p>Perfil: {url}</p>
        <p>Seguidores: {followers}</p>
        <p>Localidade: {location}</p>
        <p>Nome: {name}</p>
      </div>
    </div>
  );
};

export default ResultCard;
