import React, { useState } from 'react';
import './Belgium.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lexus1 from "../assets/Select/lexus1.jpg";
import lexus2 from "../assets/Select/lexus2.jpg";
import lexus3 from "../assets/Select/lexus3.jpg";
import lexus4 from "../assets/Select/lexus4.jpg";

function Belgium() {
  const [formData, setFormData] = useState({
    model: '',
    type: '',
    title: '',
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    date: '',
    period: '',
    consent: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    let newValue = value;

    if (name === 'model' && event.target.options[event.target.selectedIndex].getAttribute('data-img')) {
      newValue = {
        value: value,
        imgSrc: event.target.options[event.target.selectedIndex].getAttribute('data-img')
      };
    } else {
      newValue = type === 'checkbox' ? checked : value;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { model, type, title, lastName, firstName, phone, date, period, consent } = formData;
    if (!model || !type || !title || !lastName || !firstName || !phone || !date || !period || !consent) {
      toast.error('Please fill in all fields!');
      return;
    }

    localStorage.setItem('formData', JSON.stringify(formData));

    // Display success message if all fields are filled
    toast.success('Form submitted successfully!');
    // Optionally, you can also send the data to a backend server here
    console.log(formData); // Display form data in the console
  };


  return (
    <div className='Belgium'>
      <ToastContainer />
      <div className="Page">
        <h1>RÉSERVER UN ESSAI</h1>
        <p>Remplissez ce formulaire si vous souhaitez participer à un essai Lexus</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='Cars'>
          <p>Modèle</p>
          <select className="select1" name="model" onChange={handleInputChange} value={formData.model.value}>
            <option value="">Veuillez sélectionner un modèle</option>
            <option value="UX 250h" data-img={lexus1}>UX 250h</option>
            <option value="LS 500h" data-img={lexus2}>LS 500h</option>
            <option value="LC Carbio" data-img={lexus3}>LC Carbio</option>
            <option value="ES 300h" data-img={lexus4}>ES 300h</option>
          </select>
          {formData.model.imgSrc && <img src={formData.model.imgSrc} alt={formData.model.value} />}
        </div>

        <div className='radio'>
          <label>
            <input className='radio1' type="radio" name="type" value="private" onChange={handleInputChange} checked={formData.type === 'private'} /> Demande à titre privé
          </label>
        </div>
        <div className='radioo'>
          <input className='radio2' type="radio" name="type" value="professional" onChange={handleInputChange} checked={formData.type === 'professional'} /> Demande à titre professionnel
        </div>
        <div className="slelct2">
          <p>Titre</p>
          <select className='select2' name="title" onChange={handleInputChange} value={formData.title}>
            <option value="">Veuillez sélectionner</option>
            <option value="M.">M.</option>
            <option value="Mme">Mme</option>
          </select>
        </div>
        <div className='Name'>
          <p>Nom*</p>
          <input type="text" name='lastName' onChange={handleInputChange} value={formData.lastName} required />
          <p>Prénom*</p>
          <input type="text" name='firstName' onChange={handleInputChange} value={formData.firstName} required />
        </div>
        <div className='Phone'>
          <p>Téléphone*</p>
          <input type="text" name='phone' onChange={handleInputChange} value={formData.phone} required />
          <p>Email</p>
          <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
        </div>
        <div className="RightSelect">
          <p>Date souhaitée*</p>
          <select name="date" onChange={handleInputChange} value={formData.date} required>
            <option value="">Sélectionnez</option>
            <option value="Mercredi 26 juin 2024">Mercredi 26 juin 2024</option>
            <option value="Jeudi 27 Juin 2024">Jeudi 27 Juin 2024</option>
            <option value="Vendredi 28 Juin 2024">Vendredi 28 Juin 2024</option>
            <option value="Samedi 29 Juin 2024">Samedi 29 Juin 2024</option>
            <option value="Lundi 1 Juillet 2024">Lundi 1 Juillet 2024</option>
            <option value="Mardi 2 Juillet 2024">Mardi 2 Juillet 2024</option>
          </select>
          <select name="period" onChange={handleInputChange} value={formData.period} required>
            <option value="">Sélectionnez</option>
            <option value="Matin">Matin</option>
            <option value="Après-midi">Après-midi</option>
          </select>
        </div>
        <div className='Restons'>
          <h3>Restons en contact</h3>
          <p>Continuer à vous informer, c’est important pour nous. Par exemple, pour vous rappeler vos entretiens ou l’expiration d’un abonnement, vous inviter à des événements exclusifs ou vous faire profiter d’offres intéressantes. Mais nous souhaitons le faire en toute transparence et avec votre accord.
          Quelles communications souhaitez-vous recevoir de la part de Lexus ? C’est vous qui décidez !</p>
        </div>
        <div className='Last'>
          <label>
            <input type="checkbox" name="consent" onChange={handleInputChange} checked={formData.consent} />
            J’aimerais que Lexus m’informe sur les échéances de mes entretiens et abonnements chez Lexus* 
          </label>
          <button type="submit">ENVOYER</button>
        </div>
      </form>
      <div className='hr'>
        <hr />
        <p>* C’est-à-dire : Lexus, B.U. de Toyota Belgium, votre distributeur/réparateur agréé ainsi que nos autres entités (Car Security SA et Autoproduct SA, Toyota Motor Europe, Toyota Financial Services Belgium). En cochant la case, vous acceptez que Lexus vous contacte via tous vos canaux (adresse, téléphone, e-mail…). Ce consentement couvre tous les produits et services de Lexus y compris les solutions de mobilité (assurance, financement, accessoires, garanties prolongées, assistance routière, entretiens, services connectés…).. Ce consentement n’est pas obligatoire et vous pouvez y mettre fin à tout moment en nous envoyant un e-mail à privacy@lexus.be ou un courrier à Lexus, service clientèle (privacy), Leuvensesteenweg 369, 1932 Zaventem. Si vous ne souhaitez plus de communication de la part d’un distributeur/réparateur agréé spécifique, merci de prendre contact directement avec lui.</p>
        <hr />
      </div>
    </div>
  );
}

export default Belgium
