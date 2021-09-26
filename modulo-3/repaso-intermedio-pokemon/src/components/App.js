// Ficheros importados
import '../styles/App.scss';
import data from '../services/data.json';
import { useState } from 'react';

const App = () => {
  return (
    <>
      <header className="">
        <h1 className="">Mi lista de pokemon</h1>
        <img className="" src="" alt="pokeball" />
      </header>
      <main className="">
        <section className="">
          <ul></ul>
        </section>
        <section>
          <h2>Favoritos</h2>
          <ul></ul>
        </section>
      </main>
    </>
  );
};

export default App;
