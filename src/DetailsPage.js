import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DetailsPage.css';
import SvgApp from './assets/icons/apps-svgrepo-com.svg';
import SvgCalendar from './assets/icons/calendar-days-svgrepo-com.svg';
import SvgSpeed from './assets/icons/speed-alt-svgrepo-com.svg';
import SvgEngine from './assets/icons/engine-motor-svgrepo-com.svg';
import SvgCarburant from './assets/icons/fuel-svgrepo-com.svg';
import SvgBoite from './assets/icons/gearshift-shift-svgrepo-com.svg';
import SvgEtat from './assets/icons/stars-01-svgrepo-com.svg';
import SvgFlag from './assets/icons/flag-svgrepo-com.svg';
import SvgCardoor from './assets/icons/car-door-left-1-svgrepo-com.svg';
import SvgCarkey from './assets/icons/car-key-svgrepo-com.svg';

const DetailsPage = ({ setAnnouncements }) => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    marque: '',
    annee: '',
    kilomt: '',
    puissance: '',

    carburant: '',
    boite: '',
    etat: '',
    origine: '',
    nbporte: '',
    neuf: '',

    jante: false,
    airbags: false,
    clim: false,
    toitouvrant: false,
  });

  const [errors, setErrors] = useState({});

  const handleFormData = e => {
    const { name, type, checked, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.marque) {
      newErrors.marque = 'Veuillez sélectionner une marque';
    }

    if (!formData.annee) {
      newErrors.annee = 'Veuillez sélectionner une année';
    }

    if (!formData.kilomt) {
      newErrors.kilomt = 'Veuillez sélectionner un kilométrage';
    }

    if (!formData.puissance) {
      newErrors.puissance = 'Veuillez sélectionner une puissance';
    }

    if (!formData.carburant) {
      newErrors.carburant = 'Veuillez sélectionner un carburant';
    }

    if (!formData.boite) {
      newErrors.boite = 'Veuillez sélectionner une boite';
    }

    if (!formData.etat) {
      newErrors.etat = 'Veuillez sélectionner un état';
    }

    if (!formData.origine) {
      newErrors.origine = 'Veuillez sélectionner une origine';
    }

    if (!formData.nbporte) {
      newErrors.nbporte = 'Veuillez sélectionner un nombre de portes';
    }

    if (!formData.neuf) {
      newErrors.neuf = 'Veuillez sélectionner un truc';
    }

    if (!formData.title) {
      newErrors.title = 'Veuillez compléter le titre';
    }

    if (!formData.price) {
      newErrors.price = 'Veuillez compléter le prix';
    }

    if (!formData.annonceText) {
      newErrors.annonceText = 'Veuillez compléter le texte de l\'annonce';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setAnnouncements(prevAnnouncements => [...prevAnnouncements, formData]);
      setFormSubmitted(true);
      navigate('/');
    }
  };

  return (
    <div className="pageContainer">
      {/* Navbar */}
      <nav className="navbar navbarCustom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Retour
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              Step 1 / Step 2 / Step 3
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown */}

      {/* Marque */}
      <div className="container formContainer">
      <h1 style={{ fontSize: '2.2em', color: '#363636', marginTop: '10px' }}>Détails de l'annonce</h1>
      <h3 style={{ fontSize: '1.2em', color: '#363636', marginBottom: '10px' }}>Ajouter plus de Détails sur votre annonce pour un maximum de visibilité</h3>
        <form onSubmit={handleSubmit}>
        <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Marque</label>
                <div className="control has-icons-left">
                  <div className="select is-fullwidth">
                    <select name="marque" value={formData.marque} onChange={handleFormData}>
                      <option value="" disabled selected>Sélectionner</option>
                      <option value="toyota">Toyota</option>
                      <option value="peugeot">Peugeot</option>
                      <option value="tesla">Tesla</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <img src={SvgApp} alt="Icon" />
                  </span>
                </div>
                {errors.marque && <p className="help is-danger">{errors.marque}</p>}
              </div>
            </div>

            {/* Années */}
            <div className="column">
            <div className="field">
                <label className="label">Années</label>
                <div className="control has-icons-left">
                  <div className="select is-fullwidth">
                    <select name="annee" value={formData.anne} onChange={handleFormData}>
                      <option value="" disabled selected>Sélectionner</option>
                      <option value="2020+">2020+</option>
                      <option value="2010-2019">2010-2019</option>
                      <option value="2000-2009">2000-2009</option>
                      <option value="1999-">1999-</option>

                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <img src={SvgCalendar} alt="Icon" />
                  </span>
                </div>
                {errors.annee && <p className="help is-danger">{errors.annee}</p>}
              </div>
            </div>
          </div>

          {/* Kilometrage */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Kilométrage</label>
                <div className="control has-icons-left">
                  <div className="select is-fullwidth">
                    <select name="kilomt" value={formData.kilomt} onChange={handleFormData}>
                      <option value="" disabled selected>Sélectionner</option>
                      <option value="0-1000">0-1000</option>
                      <option value="1001-50000">1001-50000</option>
                      <option value="50001-100000">50001-100000</option>
                      <option value="100001+">100001+</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <img src={SvgSpeed} alt="Icon" />
                  </span>
                </div>
                {errors.kilomt && <p className="help is-danger">{errors.kilomt}</p>}
              </div>
            </div>

            {/* Puissance */}
            <div className="column">
              <div className="field">
                <label className="label">Puissance Fiscale</label>
                <div className="control has-icons-left">
                  <div className="select is-fullwidth">
                    <select name="puissance" value={formData.puissance} onChange={handleFormData}>
                      <option value="" disabled selected>Sélectionner</option>
                      <option value="connait-pas">Connait pas</option>
                      <option value="flemme1">Flemme de chercher</option>
                      <option value="flemme2">Toujours la flemme</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <img src={SvgEngine} alt="Icon" />
                  </span>
                </div>
                {errors.puissance && <p className="help is-danger">{errors.puissance}</p>}
              </div>
            </div>
          </div>

          {/* Radio */}

          {/* Carburant */}
          <div className="field">
            <label className="label"><img src={SvgCarburant} alt="Carburant" />Carburant</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="carburant_diesel"
                name="carburant"
                value="diesel"
                checked={formData.carburant === 'diesel'}
                onChange={handleFormData}
              />
              <label htmlFor="carburant_diesel">Diesel</label>
              <input
                type="radio"
                id="carburant_essence"
                name="carburant"
                value="essence"
                checked={formData.carburant === 'essence'}
                onChange={handleFormData}
              />
              <label htmlFor="carburant_essence">Essence</label>
              <input
                type="radio"
                id="carburant_electrique"
                name="carburant"
                value="electrique"
                checked={formData.carburant === 'electrique'}
                onChange={handleFormData}
              />
              <label htmlFor="carburant_electrique">Electrique</label>
              <input
                type="radio"
                id="carburant_lpg"
                name="carburant"
                value="lpg"
                checked={formData.carburant === 'lpg'}
                onChange={handleFormData}
              />
              <label htmlFor="carburant_lpg">LPG</label>
              <input
                type="radio"
                id="carburant_hybride"
                name="carburant"
                value="hybride"
                checked={formData.carburant === 'hybride'}
                onChange={handleFormData}
              />
              <label htmlFor="carburant_hybride">Hybride</label>
              {errors.carburant && <p className="help is-danger">{errors.carburant}</p>}
            </div>
          </div>

          {/* Boite */}
          <div className="field">
            <label className="label"><img src={SvgBoite} alt="Boite" />Boite</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="boite_auto"
                name="boite"
                value="auto"
                checked={formData.boite === 'auto'}
                onChange={handleFormData}
              />
              <label htmlFor="boite_auto">Automatique</label>
              <input
                type="radio"
                id="boite_manual"
                name="boite"
                value="manual"
                checked={formData.boite === 'manual'}
                onChange={handleFormData}
              />
              <label htmlFor="boite_manual">Manuelle</label>
              {errors.boite && <p className="help is-danger">{errors.boite}</p>}
            </div>
          </div>

          {/* Etat */}
          <div className="field">
            <label className="label"><img src={SvgEtat} alt="Etat" />Etat</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="etat_excellent"
                name="etat"
                value="excellent"
                checked={formData.etat === 'excellent'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_excellent">Excellent</label>
              <input
                type="radio"
                id="etat_tbon"
                name="etat"
                value="tbon"
                checked={formData.etat === 'tbon'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_tbon">Très bon</label>
              <input
                type="radio"
                id="etat_bon"
                name="etat"
                value="bon"
                checked={formData.etat === 'bon'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_bon">Bon</label>
              <input
                type="radio"
                id="etat_correct"
                name="etat"
                value="correct"
                checked={formData.etat === 'correct'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_correct">Correct</label>
              <input
                type="radio"
                id="etat_endommage"
                name="etat"
                value="endommage"
                checked={formData.etat === 'endommage'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_endommage">Endommagé</label>
              <input
                type="radio"
                id="etat_pour_pieces"
                name="etat"
                value="pour_pieces"
                checked={formData.etat === 'pour_pieces'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_pour_pieces">Pour pièces</label>
              <input
                type="radio"
                id="etat_neuf"
                name="etat"
                value="neuf"
                checked={formData.etat === 'neuf'}
                onChange={handleFormData}
              />
              <label htmlFor="etat_neuf">Neuf</label>
              {errors.etat && <p className="help is-danger">{errors.etat}</p>}
            </div>
          </div>

          {/* Origine */}
          <div className="field">
            <label className="label"><img src={SvgFlag} alt="Origine" />Origine</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="origine_dedoua"
                name="origine"
                value="dedoua"
                checked={formData.origine === 'dedoua'}
                onChange={handleFormData}
              />
              <label htmlFor="origine_dedoua">Dédouannée</label>
              <input
                type="radio"
                id="origine_pasdedoua"
                name="origine"
                value="pasdedoua"
                checked={formData.origine === 'pasdedoua'}
                onChange={handleFormData}
              />
              <label htmlFor="origine_pasdedoua">Pas encore dédouannée</label>
              <input
                type="radio"
                id="origine_wwmaroc"
                name="origine"
                value="wwmaroc"
                checked={formData.origine === 'wwmaroc'}
                onChange={handleFormData}
              />
              <label htmlFor="origine_wwmaroc">WW au Maroc</label>
              <input
                type="radio"
                id="origine_importneuve"
                name="origine"
                value="importneuve"
                checked={formData.origine === 'importneuve'}
                onChange={handleFormData}
              />
              <label htmlFor="origine_importneuve">Importée neuve</label>
              {errors.origine && <p className="help is-danger">{errors.origine}</p>}
            </div>
          </div>

          {/* Nb Portes*/}
          <div className="field">
            <label className="label"><img src={SvgCardoor} alt="nbporte" />Nombre de portes</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="door3"
                name="nbporte"
                value="3"
                checked={formData.nbporte === '3'}
                onChange={handleFormData}
              />
              <label htmlFor="door3">3</label>
              <input
                type="radio"
                id="door5"
                name="nbporte"
                value="5"
                checked={formData.nbporte === '5'}
                onChange={handleFormData}
              />
              <label htmlFor="door5">5</label>
              {errors.nbporte && <p className="help is-danger">{errors.nbporte}</p>}
            </div>
          </div>

          {/* 1ere main */}
          <div className="field">
            <label className="label"><img src={SvgCarkey} alt="neuf" />Première main</label>
            <div className="control radio-button">
              <input
                type="radio"
                id="neuf_oui"
                name="neuf"
                value="neuf_oui"
                checked={formData.neuf === 'neuf_oui'}
                onChange={handleFormData}
              />
              <label htmlFor="neuf_oui">Oui</label>
              <input
                type="radio"
                id="neuf_non"
                name="neuf"
                value="neuf_non"
                checked={formData.neuf === 'neuf_non'}
                onChange={handleFormData}
              />
              <label htmlFor="neuf_non">Non</label>
              {errors.neuf && <p className="help is-danger">{errors.neuf}</p>}
            </div>
          </div>

          <h1 style={{ fontSize: '2.2em', color: '#363636', marginTop: '40px'}}>Information de l'annonce</h1>
          <h3 style={{ fontSize: '1.2em', color: '#363636', marginBottom: '10px' }}> Une annonce avec un prix exacte et une description bien detailaillé a  10 fois plus de visibilité</h3>

          {/* Texte */}

          {/* Titre */}
          <div className="field">
            <label className="label">Titre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormData}
                placeholder="Mettre un titre"
              />
              {errors.title && <p className="help is-danger">{errors.title}</p>}
            </div>
          </div>

          {/* Prix */}
          <div className="field">
            <label className="label">Prix</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleFormData}
                placeholder="0"
              />
              {errors.price && <p className="help is-danger">{errors.price}</p>}
            </div>
          </div>

          {/* Texte de l'annonce */}
          <div className="field">
            <label className="label">Texte de l'annonce</label>
            <div className="control">
              <textarea
                className="textarea"
                name="annonceText"
                value={formData.annonceText}
                onChange={handleFormData}

              />
              {errors.annonceText && <p className="help is-danger">{errors.annonceText}</p>}
            </div>
          </div>

          {/* Checkbox */}
          <div className="field">
            <label className="label">Détails optionnels</label>
            <div className="control checkbox-button">
              <input
                type="checkbox"
                id="jante"
                name="jante"
                checked={formData.jante}
                onChange={handleFormData}
              />
              <label htmlFor="jante">Jante</label>

              <input
                type="checkbox"
                id="airbags"
                name="airbags"
                checked={formData.airbags}
                onChange={handleFormData}
              />
              <label htmlFor="airbags">Airbags</label>

              <input
                type="checkbox"
                id="clim"
                name="clim"
                checked={formData.clim}
                onChange={handleFormData}
              />
              <label htmlFor="clim">Clim</label>

              <input
                type="checkbox"
                id="toitouvrant"
                name="toitouvrant"
                checked={formData.toitouvrant}
                onChange={handleFormData}
              />
              <label htmlFor="toitouvrant">Toit ouvrant</label>
            </div>
          </div>

          {/* Submit */}
          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;
