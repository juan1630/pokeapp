import logo from './logo.svg';
import './App.css';

import {useEffect, useState } from 'react'
import { Card } from './components/Card';

function App() {

  const [ statePokemons, setPokemons] = useState([]);

  useEffect(() => {
    apiRequest();
  },[]);

  const apiRequest = async() => {

    for( let i = 1; i < 50; i++ ) {

      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const resp = await data.json();
      
      setPokemons( prevState => ([
        ...prevState,
        resp
      ]
      ));
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
          <section className='container' > 
            <div className='row mt-5' >
              
              {
                statePokemons.map( (elem, index) => (
                  <Card elem={elem} key={ index }  />
                  ))
              }
              
            </div>
          </section>
      </main>
    </div>
  );
}

export default App;
