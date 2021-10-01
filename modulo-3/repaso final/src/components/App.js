import '../styles/App.scss';
import React, { useState, useEffect } from 'react';

// components
import ContactList from './ContactList';
import Filters from './Filters';

// services
import DataApi from '../services/DataApi';

//images

function App() {
  //estados//
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchGender, setSearchGender] = useState('all');

  //useEffect//
  useEffect(() => {
    DataApi().then((initialData) => {
      setData(initialData);
    });
  }, []);

  //Funciones manejadoras//
  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleChangeSearchGender = (ev) => {
    setSearchGender(ev.currentTarget.value);
  };

  //Funciones para filtrar por nombre y género
  const filteredData = data
    .filter((contact) =>
      contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (contact) => searchGender === 'all' || searchGender === contact.gender
    );

  return (
    <>
      <h1 className="title--big">Directorio de lo que sea</h1>
      <div className="col2">
        <section>
          <Filters
            searchName={searchName}
            searchGender={searchGender}
            handleChangeSearchName={handleChangeSearchName}
            handleChangeSearchGender={handleChangeSearchGender}
          />
        </section>
        <section>
          <ContactList data={filteredData} />
        </section>
      </div>
    </>
  );
}

export default App;
