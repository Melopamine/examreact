import { useParams, Link } from 'react-router-dom';

const AnnounceDetail = ({ announcements }) => {
  const { id } = useParams();
  const announcement = announcements[parseInt(id, 10)];

  if (!announcement) {
    return (
      <>
      <nav className="navbar navbarCustom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Retour
          </Link>
        </div>
      </nav>
      <div>Announcement not found</div>
      </>
    )
  }

  return (
    <>
    <nav className="navbar navbarCustom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Retour
        </Link>
      </div>
    </nav>
    <div className="card" style={{ margin: '10px' }}>
      <div className="card-content">
        <h1><strong>{announcement.title}</strong></h1>
        <p>Prix: {announcement.price}</p>
        <p>Texte de l'annonce: {announcement.annonceText}</p>
        <p>Marque: {announcement.marque}</p>
        <p>Année: {announcement.annee}</p>
        <p>Kilométrage: {announcement.kilomt}</p>
        <p>Puissance Fiscale: {announcement.puissance}</p>
        <p>Carburant: {announcement.carburant}</p>
        <p>Boite: {announcement.boite}</p>
        <p>Etat: {announcement.etat}</p>
        <p>Origine: {announcement.origine}</p>
        <p>Nombre de portes: {announcement.nbporte}</p>
        <p>Première main: {announcement.neuf ? 'Oui' : 'Non'}</p>
        <p>Autres options:</p>

        {announcement.jante && <p>-Jante: Oui</p>}
        {announcement.airbags && <p>-Airbags: Oui</p>}
        {announcement.clim && <p>-Climatisation: Oui</p>}
        {announcement.toitouvrant && <p>-Toit ouvrant: Oui</p>}
      </div>
    </div>
    </>
  );
}

export default AnnounceDetail;
