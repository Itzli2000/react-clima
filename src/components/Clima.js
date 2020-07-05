import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ apiresult }) => {

    const { name, main } = apiresult;

    if (!main) return null;

    const kelvin = 273.25;

    const temperature = parseFloat(main.temp - kelvin).toFixed(2);
    const temperature_max = parseFloat(main.temp_max - kelvin).toFixed(2);
    const temperature_min = parseFloat(main.temp_min - kelvin).toFixed(2);

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {temperature} &#x2103;
                </p>
                <p>
                    Temperatura máxima:
                    {temperature_max} &#x2103;
                </p>
                <p>
                    Temperatura mínima:
                    {temperature_min} &#x2103;
                </p>
            </div>
        </div>
    );
};

Clima.propTypes = {
    apiresult: PropTypes.object.isRequired,
};

export default Clima;