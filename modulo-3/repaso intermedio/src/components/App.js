import '../styles/App.scss';
//Import de datos de luista de contactos array de 4 objetos
import initialData from '../data/contact.json';
import { useState } from 'react';

function App() {
  //variables estado

  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  //Funciones manejadoras

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(ev.target.value);
  };
  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleLastname = (ev) => {
    setLastname(ev.currentTarget.value);
  };
  const handlePhone = (ev) => {
    setPhone(ev.currentTarget.value);
  };

  const handleMail = (ev) => {
    setMail(ev.currentTarget.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    const newContact = {
      name: name,
      lastname: lastname,
      phone: phone,
      email: mail,
    };

    //Hago clon de lo que hay en data con spread operator y luego añador nuevo contacto
    setData([...data, newContact]);

    setName('');
    setLastname('');
    setPhone('');
    setMail('');
  };

  //Para cada uno de los objetos de data va a generar ese html y lo acumula en una array, lo guardo en variable htmlContactList
  //filtro en data y despues añado los arrays filtrados
  const htmlContactList = data

    //filtro las búsqueda por nombre y por apellido
    .filter(
      (contact) =>
        contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        contact.lastname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
    )
    //añade todos los contactos
    .map((oneContact, index) => (
      <li key={index} className="contact__item">
        <p className="contact__name">
          <label className="contact__label">Nombre:</label>
          {oneContact.name}
          {oneContact.lastname}
        </p>
        <p className="contact__phone">
          <label className="contact__label">Teléfono:</label>
          <a
            href={`tel:${oneContact.phone}`}
            title="Pulsa aquí para llamar a Lola"
          >
            {oneContact.phone}
          </a>
        </p>
        <p className="contact__mail">
          <label className="contact__label">Email:</label>
          <a
            href={`mailto:${oneContact.email}`}
            title="Pulsa aquí para escribir a Lola"
          >
            lmartinez@adalab.es
          </a>
        </p>
      </li>
    ));

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleSearch}
            value={search}
          />
        </form>
      </header>
      {/*llamadas a eventos en html y a datos de los objetos */}{' '}
      <main>
        {/* contact list */}
        <ul className="contact__list">{htmlContactList}</ul>
        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleName}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onChange={handleLastname}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={handlePhone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleMail}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
