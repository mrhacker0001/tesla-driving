import React, { useMemo, useState } from 'react';
import { useStoreState } from "../Components/Redux/selector";
import './Belgium.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lexus1 from "../assets/Select/lexus1.jpg";
import lexus2 from "../assets/Select/lexus2.jpg";
import lexus3 from "../assets/Select/lexus3.jpg";
import lexus4 from "../assets/Select/lexus4.jpg";
import locale from "../localization/locale.json";

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


  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang]);



  return (
    <div className='Belgium'>
      <ToastContainer />
      <div className="Page">
        <h1>{langData.remplissez}</h1>
        <p>{langData.essai}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='Cars'>
          <p>{langData.model}</p>
          <select className="select1" name="model" onChange={handleInputChange} value={formData.model.value}>
            <option value="">{langData.selectionner}</option>
            <option value="UX 250h" data-img={lexus1}>UX 250h</option>
            <option value="LS 500h" data-img={lexus2}>LS 500h</option>
            <option value="LC Carbio" data-img={lexus3}>LC Carbio</option>
            <option value="ES 300h" data-img={lexus4}>ES 300h</option>
          </select>
          {formData.model.imgSrc && <img src={formData.model.imgSrc} alt={formData.model.value} />}
        </div>

        <div className='radio'>
          <label>
            <input className='radio1' type="radio" name="type" value="private" onChange={handleInputChange} checked={formData.type === 'private'} />{langData.demande}
          </label>
        </div>
        <div className='radioo'>
          <input className='radio2' type="radio" name="type" value="professional" onChange={handleInputChange} checked={formData.type === 'professional'} />{langData.demande2}
        </div>
        <div className="slelct2">
          <p>{langData.title}</p>
          <select className='select2' name="title" onChange={handleInputChange} value={formData.title}>
            <option value="">{langData.veuillez}</option>
            <option value="M.">{langData.m}</option>
            <option value="Mme">{langData.mme}</option>
          </select>
        </div>
        <div className='Name'>
          <p>{langData.nom}</p>
          <input type="text" name='lastName' onChange={handleInputChange} value={formData.lastName} required />
          <p>{langData.prénom}</p>
          <input type="text" name='firstName' onChange={handleInputChange} value={formData.firstName} required />
        </div>
        <div className='Phone'>
          <p>{langData.telephone}</p>
          <input type="text" name='phone' onChange={handleInputChange} value={formData.phone} required />
          <p>{langData.email}</p>
          <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
        </div>
        <div className="RightSelect">
          <p>{langData.date}</p>
          <select name="date" onChange={handleInputChange} value={formData.date} required>
            <option value="">{langData.select2}</option>
            <option value="Mercredi 26 juin 2024">{langData.mercredi}</option>
            <option value="Jeudi 27 Juin 2024">{langData.jeudi}</option>
            <option value="Vendredi 28 Juin 2024">{langData.vendredi}</option>
            <option value="Samedi 29 Juin 2024">{langData.samedi}</option>
            <option value="Lundi 1 Juillet 2024">{langData.lundi}</option>
            <option value="Mardi 2 Juillet 2024">{langData.mardi}</option>
          </select>
          <select name="period" onChange={handleInputChange} value={formData.period} required>
            <option value="">{langData.select3}</option>
            <option value="Matin">{langData.martin}</option>
            <option value="Après-midi">{langData.apres}</option>
          </select>
        </div>
        <div className='Restons'>
          <h3>{langData.restons}</h3>
          <p>{langData.continuer}</p>
        </div>
        <div className='Last'>
          <label>
            <input type="checkbox" name="consent" onChange={handleInputChange} checked={formData.consent} />
            {langData.jaimerais}
          </label>
          <button type="submit">{langData.envoyer}</button>
        </div>
      </form>
      <div className='hr'>
        <hr />
        <p>{langData.toyota}</p>
        <hr />
      </div>
    </div>
  );
}

export default Belgium
