import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [consult, setConsult] = useState(false);
  const [apiresult, setApiResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const ApiKey = 'a12d21d34cdbc737d1da24d1c97a9b68';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;
    const consultAPI = async () => {
      if (consult) {
        const result = await fetch(url);
        const response = await result.json();
        setApiResult(response);
        setConsult(false);
        if (response.cod === '404') {
          setError(true);
        }
        else {
          setError(false);
        }
      }

    }
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);

  let componente;
  if (error) {
    componente = <Error message="No hay resultado" />
  }
  else {
    componente = <Clima
      apiresult={apiresult}
    />
  }

  return (
    <Fragment>
      <Header
        title="Climea react"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
