// Fichero src/components/App.js
import '../styles/App.scss';
// Fichero src/components/App.js

import { useEffect, useState } from 'react';
// Importamos el servicio del local storage
import ls from '../services/local-storage';

// Si consoleas ls verás que es el objeto con las 4 funciones que hemos exportado en el servicio
console.log(ls);

const App = () => {
  //Estados

  // Obtenemos el nombre del local storage
  // Si hay datos en el local storage esta función los devolverá
  // Si no hay datos en el local storage esta función devolverá el segundo parámetro, es decir, un string vacío
  const localStorageTask = ls.get('tasks', '');
  // Usamos localStorageName como parámetro de useState porque queremos que al arrancar la página name tenga lo que había en el local storage

  // Crearmos las series en el estado indicando el array inicial
  const [tasks, setTasks] = useState(localStorageTask[
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  useEffect(() => {
    // Guardamos la tarea local storage
    ls.set('tasks', tasks);

    // Este useEffect solo se ejecutará cuando cambie el nombre o el email
    console.log('Ha cambiado una tarea');
  }, [tasks]);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una tarea
  const handleTasks = (ev) => {
    // Obtenemos el task de la tarea pintada. Este task lo estamos renderizando dentro del map
    const clickedTask = ev.currentTarget.id;
    // Buscamos la tarea pulsada
    //const foundTask = tasks.find((task) => task.id === clickedTask);
    // Invertimos la propiedad de serie pintada, si antes era false ahora es true y viceversa
    tasks[clickedTask].completed = !tasks[clickedTask].completed;
    // Guardamos las tareas en el estado usando spread
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        // Renderizamos cada serie añdiendo el atributo id
        <li
          className={task.completed ? 'done' : ''}
          key={index}
          id={index}
          onClick={handleTasks}
        >
          <h2>{task.task}</h2>
          {/* Pintamos si cada serie es favorita usando el atributo isFavorite */}
          <p>Tarea realizada: {task.completed ? 'Sí' : 'No'}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de tareas:</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default App;
