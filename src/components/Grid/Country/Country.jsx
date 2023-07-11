import React from 'react';
import './country.scss';

export default function Country(props) {

  const country = props.countryInfo;

  return (
    <div className='country brd-rad' onClick={props.onClick}>
      <div className="country__flag">
        <img src={country.flags.svg} alt="flag" />
      </div>
      <div className="country__info">
        <h3 className="country__name heading-3 mb-md">{country.name.common}</h3>
        <div className="country__pop mb-sm"><b className="bold-body">Population: </b>{country.population.toLocaleString()}</div>
        <div className="country__region mb-sm"><b className="bold-body">Region: </b>{country.region}</div>
        <div className="country__capital"><b className="bold-body">Capital: </b>{country.capital}</div>
      </div>
    </div>
  )
}
