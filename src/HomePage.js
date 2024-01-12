import { Link } from "react-router-dom";
import garageImage from './assets/image/garage.jpg';

const HomePage = ({ announcements }) => {
  return (
    <>
    <div style={{ backgroundColor: 'lightgray', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '40vh', width: '100%', position: 'relative' }}>
        <img src={garageImage} alt="Le garage de Francis" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', margin: '10px', padding: '10px' }}>
            <h1>Le garage de Francis</h1>
          </div>
        </div>
      </div>
      <Link to="/details">Ajouter une Annonce</Link>
      <div className="card" style={{ margin: '10px' }}>
          {announcements.map((announce, index) => (
            <div key={index}>
            <div className="card-content">
              <h3>{announce.title}</h3>
              <p>Price: {announce.price}</p>
              <p>{announce.annonceText.length > 100 ? announce.annonceText.substring(0, 100) + "..." : announce.annonceText}</p>
              <Link to={`/details/${index}`} className="button">Afficher plus de details</Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
